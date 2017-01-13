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

  def chang_to_slug(slug)
    slug.downcase
    # Đổi ký tự có dấu thành không dấu
    slug = slug.gsub(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/, 'a')
    .gsub(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/, 'e')
    .gsub(/i|í|ì|ỉ|ĩ|ị/, 'i')
    .gsub(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/, 'o')
    .gsub(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/, 'u')
    .gsub(/ý|ỳ|ỷ|ỹ|ỵ/, 'y')
    .gsub(/đ/, 'd')

    # Xóa các ký tự đặt biệt
    slug = slug.gsub(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/, '')

    # Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.gsub(/ /, " - ")
    slug = slug.strip

    # Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@'
    slug = slug.gsub(/\s+/, '')
    slug = slug.gsub(/\@\-|\-\@|\@/, '')
  end
end
