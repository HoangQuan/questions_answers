class Answer < ApplicationRecord
  # belongs_to :question
  # belongs_to :users

  scope :corrected, -> {  find_by(correct: true) }
end
