class Question < ApplicationRecord
  has_many :answers
  has_many :users_answers
  belongs_to :category
  belongs_to :level

  accepts_nested_attributes_for :answers, allow_destroy: true, :reject_if => lambda { |a| a[:content].blank? }

  # scope :correct_answer, -> (question_id) { find(question_id).answers.corrected }
  validates :title, length: {minimum: 10, maximum: 200}
  validates :content, length: {minimum: 10}

  def correct_answer
  	answers.find_by(correct: true)
  end
end
