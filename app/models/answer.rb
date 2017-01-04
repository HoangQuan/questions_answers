class Answer < ApplicationRecord
  # belongs_to :question
  # belongs_to :users

  scope :corrected, -> {  where(correct: true) }
end
