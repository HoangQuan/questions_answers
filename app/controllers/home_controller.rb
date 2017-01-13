class HomeController < ApplicationController
  def index
    @questions = Question.order(updated_at: :desc)
  end

  def show
  	@question = Question.last
  end
end
