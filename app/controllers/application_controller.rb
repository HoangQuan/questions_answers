class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user
  helper_method :admin?

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def admin?
    return true if Rails.env.development?
    current_user && (current_user.type == 'Admin' || current_user == User.first)
  end

  def authenticate_admin!
    if !admin?
      redirect_to root_path, notice: 'Bạn không phải Admin!!!'
    end
  end

  def authenticate!
    if !current_user
      redirect_to root_path, notice: 'Bạn phải Dang nhap!!!'
    end
  end
end
