class User < ApplicationRecord
  has_many :questions
  has_many :users_answers
  belongs_to :level

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.email = auth.info.email
      user.level_id = 1
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end

  def avatar(type = 'normal')
    # type = [small, square, large, normal]
    "http://graph.facebook.com/#{uid}/picture?type=#{type}"
  end

  def users_answers_correct
    users_answers.where(correct: true)
  end
end
