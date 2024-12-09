Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  # root "posts#index"
  namespace :api do
    namespace :v1 do
      resources :users
      resources :posts do
        resources :comments, only: [:index, :create, :update, :destroy]
        resources :likes, only: [:create, :destroy]
      end
      resources :messages, only: [:index, :create, :show]
    end
  end
end
