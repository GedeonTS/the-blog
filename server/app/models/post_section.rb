class PostSection < ApplicationRecord
  belongs_to :post, foreign_key: :post_id
  validates :title, presence: true
  validates :content, presence: true
end
