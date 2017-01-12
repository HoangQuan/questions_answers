# encoding: utf-8

class ImageUploader < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  
  # include CarrierWave::RMagick
  include Cloudinary::CarrierWave
  
  # Cloudinary.set_config({
  #   cloud_name: 'hoangquan',
  #   api_key: "532951317939535",
  #   api_secret: "lrKgQpPEiKAyvv9-dL6vcZwILo4"
  # })
  process :convert => 'png'
  process :tags => ['post_picture']
  process :detection => ['adv_face']
  
  version :standard do
    # process :eager => true
    process :resize_to_fill => [100, 150]
  end
  
  # version :thumbnail do
  #   # eager
  #   # resize_to_fit(50, 50)
  #   process :resize_to_fill => [50, 50, :north]
  # end

  # Generate a 164x164 JPG of 80% quality 
  version :simple do
    process :resize_to_fill => [200, 300]
    process :convert => 'jpg'
    cloudinary_transformation :quality => 100
  end

  # Generate a 100x150 face-detection based thumbnail, 
  # round corners with a 20-pixel radius and increase brightness by 30%.
  # version :bright_face do
  #   cloudinary_transformation :effect => "brightness:30", :radius => 20,
  #     :width => 100, :height => 150, :crop => :thumb, :gravity => :face
  # end

   # Apply an incoming chained transformation: limit image to 1000x1200 and 
  # add a 30-pixel watermark 5 pixels from the south east corner. 
  # version :watermark do
    # cloudinary_transformation :transformation => [
    #     {:width => 1000, :height => 1200, :crop => :limit}, 
    #     {:overlay => "my_watermark", :width => 30, :gravity => :south_east, 
    #      :x => 5, :y => 5}
    #   ]
  # end

  # version :rotated do
  #   # eager
  #   cloudinary_transformation :transformation => [
  #       {:width => 150, :height => 200, :crop => :fill, :effect => "sepia"}, 
  #       {:angle => 10}
  #     ]
  # end

  def public_id
    return (model.try(:title) || model.try(:slug)).to_s + SecureRandom.hex
  end

  # include CarrierWave::MiniMagick

  # Include the Sprockets helpers for Rails 3.1+ asset pipeline compatibility:
  # include Sprockets::Helpers::RailsHelper
  # include Sprockets::Helpers::IsolatedHelper

  # Choose what kind of storage to use for this uploader:
  # storage :file
  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  # def store_dir
  #   "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  # end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  
  #   asset_path "fallback/" + [version_name, "default.gif"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process :scale => [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process :resize_to_limit => [300, 200]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

end
