class CreatePostSections < ActiveRecord::Migration[7.1]
  def change
    create_table :post_sections do |t|
      t.integer :post_id
      t.string :title
      t.text :content

      t.timestamps
    end
    add_foreign_key :post_sections, :posts, column: :post_id
    add_index :post_sections, :post_id
  end
end
