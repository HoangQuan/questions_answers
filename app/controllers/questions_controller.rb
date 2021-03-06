class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :edit, :update, :destroy]
  before_action :authenticate!, only: [:new, :create, :edit, :update]
  
  def index
    # @q = Product.search(params[:q])
    # @products = @q.result.includes(:product_images).order(updated_at: :desc).page(params[:page]).per(12)
    # @related_products = Product.includes(:product_images).related_products
    # @top_viewed_products = Product.includes(:product_images).top_viewed_products_except(@product)
    # @top_new_products = Product.includes(:product_images).top_new_products
    redirect_to root_path
  end

  def show
    Question.update_counters(@question.id, count_views: 1)
    # @q = Product.search(params[:q])
    # CountView.increase_product_count(@product.id, current_user.try(:id))
    # @related_products = Product.includes(:product_images).related_products
    # @top_viewed_products = Product.includes(:product_images).top_viewed_products_except(@product)
    # @top_new_products = Product.includes(:product_images).top_new_products
    # @top_campaign_products = Product.includes(:product_images).top_campaign_products(3)
  end

  def new
    @question = Question.new(title: params[:title])
  end

  def edit
  end

  def create
    @question = Question.new(question_params)
    @question.user_id = @question.updated_user_id = current_user.id
    @question.slug = chang_to_slug(@question.title)
    respond_to do |format|
      if @question.save
        format.html { redirect_to question_path(@question.slug), notice: 'question was successfully created.' }
        format.json { render :show, status: :created, location: @question }
      else
        format.html { render :new }
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end
  def update
    @question.attributes = question_params
    @question.updated_user_id = current_user.id
    @question.slug = chang_to_slug(@question.title)
    respond_to do |format|
      if @question.save
        format.html { redirect_to question_path(@question.slug), notice: 'question was successfully updated.' }
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
    def set_question
      @question = Question.friendly.find(params[:id])
    end

    def question_params
      params.require(:question).permit(:level_id, :video_url, :image, :remove_image, :category_id, :title, :difficulty_level, :content, :hint, answers_attributes: [:id, :correct, :question_id, :label, :content, :image, :_destroy])
    end
end
