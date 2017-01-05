class UsersAnswer < ApplicationRecord
  belongs_to :question

  scope :where_by_question_and_answer, ->(question, answer) { where(question: question, answer: answer)}
end
