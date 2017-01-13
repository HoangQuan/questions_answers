class Question < ApplicationRecord
  extend FriendlyId
  friendly_id :slug, use: [:slugged, :finders]

  mount_uploader :image, ImageUploader

  has_many :answers
  has_many :users_answers
  belongs_to :category
  belongs_to :level
  belongs_to :user

  after_save :set_image_original_url
  after_save :initalize_point_for_user

  accepts_nested_attributes_for :answers, allow_destroy: true, :reject_if => lambda { |a| a[:content].blank? && a[:label].blank? }

  # scope :correct_answer, -> (question_id) { find(question_id).answers.corrected }
  validates :title, length: {minimum: 10, maximum: 200}
  validates :content, length: {minimum: 5}

  def correct_answer
  	answers.find_by(correct: true)
  end

  private

  def set_image_original_url
    update_column(:image_original_url, image_url)
  end

  def initalize_point_for_user
    update(points: 5, remain_points: 5) if points.to_i == 0
  end
end
