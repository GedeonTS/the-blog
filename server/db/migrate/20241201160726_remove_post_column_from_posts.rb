class RemovePostColumnFromPosts < ActiveRecord::Migration[7.1]
  def change
    remove_column :posts, :post, :text
  end
end
