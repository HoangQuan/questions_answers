class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.integer :user_id
      t.integer :category_id
      t.string :title
      t.string :question_type
      t.string :content
      t.string :hint
      t.integer :lever_id
      t.string :slug
      t.integer :points
      t.integer :remain_points
      t.string :image_url
      t.string :image

      add_index :questions, [:title, :category_id, :lever_id]
      add_index :questions, [:title, :user_id]
      add_index :questions, [:title, :question_type]
      add_index :questions, [:title, :lever_id]

      t.timestamps
    end
  end
end
