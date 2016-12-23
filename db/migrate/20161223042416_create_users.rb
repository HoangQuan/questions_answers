class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :type
      t.string :uid
      t.string :provider
      t.string :oauth_token
      t.datetime :oauth_expires_at
      t.integer :points
      t.string :phone_number
      t.string :address
      t.string :hobby
      t.string :lon
      t.string :lat
      t.string :description

      add_index :users, [:email, :type], unique: true
      add_index :users, [:email, :name], unique: true
      add_index :users, :type

      t.index :email, :unique => true
      t.index :uid, :unique => true
      t.timestamps
    end
  end
end
