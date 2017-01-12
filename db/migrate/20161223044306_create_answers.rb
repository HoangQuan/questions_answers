class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.integer :user_id
      t.integer :question_id
      t.string :label
      t.string :content
      t.boolean :correct
      t.string :image_original_url
      t.string :image

      t.timestamps
    end
  end
end
