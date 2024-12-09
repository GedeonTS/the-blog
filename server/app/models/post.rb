class Post < ApplicationRecord
  validates :image, presence: true
  validates :title, presence: true
  belongs_to :user, foreign_key: :user_id
  has_many :likes, foreign_key: :post_id, dependent: :destroy
  has_many :comments, foreign_key: :post_id, dependent: :destroy
  has_many :post_sections, foreign_key: :post_id, dependent: :destroy
end
