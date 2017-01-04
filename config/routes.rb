Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  get 'home/show' => 'home#show', as: :home_show
  resources :questions
  resources :users_answers
end
