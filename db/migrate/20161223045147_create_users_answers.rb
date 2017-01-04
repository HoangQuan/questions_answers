class CreateUsersAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :users_answers do |t|
      t.integer :user_id
      t.integer :question_id
      t.boolean :correct
      t.string :answer

      t.timestamps
    end
  end
end
