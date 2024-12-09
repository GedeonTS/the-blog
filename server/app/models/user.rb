class User < ApplicationRecord
  validates :name, presence: true
  validates :role, presence: true
  validates :email, presence: true
  validates :password, presence: true
  has_many :posts, foreign_key: :user_id
  has_many :likes, foreign_key: :user_id
  has_many :comments, foreign_key: :user_id
end
