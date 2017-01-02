class CreateLevels < ActiveRecord::Migration[5.0]
  def change
    create_table :levels do |t|
      t.string :name
      t.string :slug
      t.string :image_url
      t.string :image
      t.timestamps
    end
  end
end
