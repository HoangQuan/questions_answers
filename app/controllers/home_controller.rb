class HomeController < ApplicationController
  def index
  end

  def show
  	@question = Question.last
  end
end
