class Api::V1::LikesController < ApplicationController
  before_action :find_like, only: [:destroy]
  def create
    @like = Like.new(like_params.merge(post_id: params[:post_id]))

    if @like.save
      render json: {status: "success", data: {like: @like}}, status: :created
    else
      render json: {status: "fail", error: {message: "Couldn't create like"}}, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotUnique
    render json: {status: "fail", error: {message: "Like already exists"}}, status: :unprocessable_entity
  end

  def destroy
    @like.destroy
  end

  private

  def find_like
    @like = Like.find(params[:id])
  end

  def like_params
    params.require(:like).permit(:user_id)
  end
end
