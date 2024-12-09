class Message < ApplicationRecord
  validates :subject, presence: true
  validates :email, presence: true
  validates :message, presence: true
end
