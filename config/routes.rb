Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api, format: 'json' do
    resources :tasks, only: [:index, :create, :destroy, :update]
  end
end
