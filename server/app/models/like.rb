class Like < ApplicationRecord
  belongs_to :user, foreign_key: :user_id
  belongs_to :post, foreign_key: :post_id
end
