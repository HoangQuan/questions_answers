OmniAuth.config.logger = Rails.logger
app_id = Rails.env.development? ? '444320619025561' : '1377753405796618'
app_secret = Rails.env.development? ? 'd7a56618cf3dc46e05646561d3983a34' : 'e3f481c6edce43a2f658e4c4902d3659'
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '444320619025561', 'd7a56618cf3dc46e05646561d3983a34', scope: "email,publish_actions,manage_pages,user_birthday"
end

OmniAuth.config.on_failure = Proc.new { |env|
    OmniAuth::FailureEndpoint.new(env).redirect_to_failure
}

# use OmniAuth::Builder do
#   provider :facebook, ENV['APP_ID'], ENV['APP_SECRET'],
#     client_options: {
#       site: 'https://graph.facebook.com/v3.0',
#       authorize_url: "https://www.facebook.com/v3.0/dialog/oauth"
#     }
# end