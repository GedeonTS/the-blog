class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.text :post
      t.string :image
      t.string :title

      t.timestamps
    end
    add_foreign_key :posts, :users, column: :user_id
    add_index :posts, :user_id
  end
end
