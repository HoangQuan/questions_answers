class UsersAnswersController < ApplicationController 
  # before_action :authenticate!, only: [:new, :create, :edit, :update]
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
    @user_answer = UsersAnswer.find_or_initialize_by(user_id: current_user.try(:id), question_id: users_answer_params[:question_id])
    if @user_answer.new_record?
      @question = Question.find(users_answer_params[:question_id])
      # @user_answer = UsersAnswer.new(user_id: 1, question_id: users_answer_params[:question_id], answer: users_answer_params[:answer].join(', '))
      @user_answer.answer = users_answer_params[:answer]
      @correct_answer = @question.correct_answer
      if @correct_answer.present?
        @user_answer.correct = check_correct_answer(@correct_answer, @user_answer)
      end

      answer = Answer.find_by(id: users_answer_params[:answer])
      set_attributes(@correct_answer, answer)
    else
      @already_answered = true
      respond_to {|format| return format.js }
    end

    respond_to do |format|
      if @user_answer.save
        if current_user && @user_answer.correct && @question.remain_points.to_i > 0
          @added_point = @question.remain_points
          User.update_counters(current_user.id, points: @question.remain_points)
          Question.update_counters(@question.id, remain_points: -1) if @question.remain_points.to_i > 0
        end
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

  def set_attributes(correct_answer, answer)
    @correct_answer = correct_answer
    answer_result        = t("views.answers.#{@user_answer.correct ? 'correct' : 'incorrect'}")
    correct_answer_label = t('views.answers.correct_answer_result', answer: @correct_answer.try(:label))
    user_answered_label  = t('views.answers.user_answered', answer: answer.try(:label))
    @attr_user_answer = Attr::UserAnswer.new(answer_result, correct_answer_label, user_answered_label)
  end
end
