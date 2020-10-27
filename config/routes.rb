Rails.application.routes.draw do
  root to: 'pages#home'
  get '/gallerie', to: 'pages#gallerie', as: 'gallerie'
  get '/show', to: 'pages#show', as: 'show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
