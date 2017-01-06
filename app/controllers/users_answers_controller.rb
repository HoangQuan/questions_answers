class UsersAnswersController < ApplicationController  
  def index
    # @q = Product.search(params[:q])
    # @products = @q.result.includes(:product_images).order(updated_at: :desc).page(params[:page]).per(12)
    # @related_products = Product.includes(:product_images).related_products
    # @top_viewed_products = Product.includes(:product_images).top_viewed_products_except(@product)
    # @top_new_products = Product.includes(:product_images).top_new_products
    redirect_to root_path
  end

  def show
    # @q = Product.search(params[:q])
    # CountView.increase_product_count(@product.id, current_user.try(:id))
    # @related_products = Product.includes(:product_images).related_products
    # @top_viewed_products = Product.includes(:product_images).top_viewed_products_except(@product)
    # @top_new_products = Product.includes(:product_images).top_new_products
    # @top_campaign_products = Product.includes(:product_images).top_campaign_products(3)
  end

  def new
    @question = UsersAnswer.new
  end

  def edit
  end

  def create
    @question = Question.find(users_answer_params[:question_id])
    # @user_answer = UsersAnswer.new(user_id: 1, question_id: users_answer_params[:question_id], answer: users_answer_params[:answer].join(', '))
    @user_answer = UsersAnswer.new(user_id: 1, question_id: users_answer_params[:question_id], answer: users_answer_params[:answer])
    @correct_answers = @question.correct_answer

    if @correct_answers.present?
      @user_answer.correct = check_correct_answer(@correct_answers, @user_answer)
    end

    @user_answers = Answer.find_by(id: users_answer_params[:answer])
    # @user_result = {
    #   answer_labels: 
    # }

    respond_to do |format|
      if @user_answer.save
        format.html {
          redirect_to @user_answer.question, notice: "Ban da tra loi #{@user_answer.correct ? 'Dung' : 'Sai'}" 
        }
        format.json { render :show, status: :created, location: @user_answer }
        format.js
      else
        format.html { render :new }
        format.json { render json: @question.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end
  def update
    @question.attributes = question_params

    respond_to do |format|
      if @question.save
        format.html { redirect_to @question, notice: 'question was successfully updated.' }
        format.json { render :show, status: :ok, location: @question }
      else
        format.html { render :edit }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @question.destroy
    respond_to do |format|
      format.html { redirect_to questions_url, notice: 'question was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def users_answer_params
  	params[:users_answer]
  end

  def check_correct_answer(correct_answer, user_answer)
    correct_answer.id == user_answer.answer.to_i
  end
end
