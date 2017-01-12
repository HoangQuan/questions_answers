class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.integer :user_id
      t.integer :category_id
      t.string :title
      t.string :question_type
      t.string :content
      t.string :hint
      t.integer :level_id
      t.string :slug
      t.integer :points, default: 0
      t.integer :remain_points, default: 0
      t.string :image_original_url
      t.string :image
      t.string :video_url # facebook and youtube
      t.string :difficulty_level # De, Trung binh, Kho
      t.string :fb_post_id
      t.integer :count_views
      t.integer :count_likes
      t.integer :updated_user_id

      t.timestamps
    end
    add_index :questions, [:title, :category_id, :level_id]
    add_index :questions, [:title, :user_id]
    add_index :questions, [:title, :question_type]
    add_index :questions, [:title, :level_id]
  end
end
