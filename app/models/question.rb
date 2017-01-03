class Question < ApplicationRecord
  has_many :answers
  belongs_to :category
  belongs_to :level

  accepts_nested_attributes_for :answers, allow_destroy: true
end
