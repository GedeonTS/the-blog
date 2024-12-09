class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:show, :update, :destroy]
  def index
    @users = User.all

    render json: {status: "success", data: {users: @users}}
  end

  def show
    render json: {status: 'success', data: {user: @user}}
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: {status: "success", data: {user: @user}}, status: :created
    else
      render json: {status: "fail", error: {message: "Couldn't create user"}}, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotUnique
    render json: {status: "fail", error: {message:"Email already taken."}}, status: :unprocessable_entity
  end

  def destroy
    @user.destroy
  end

  def update
    if @user.update(user_params)
      render json: {status: 'success', data: {user: @user } }
    else
      render json: {status: "fail", error: {message: "Couldn't update user"}}, status: :unprocessable_entity
    end
  end
  private

  def find_user
    @user = User.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: {status: "fail", error: {message: "User not found"} }, status: :not_found
  end

  def user_params
    params.require(:user).permit(:email, :name, :role, :password)
  end
end
