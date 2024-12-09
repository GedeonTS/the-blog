class Api::V1::CommentsController < ApplicationController
  before_action :find_comment, only: [:update, :destroy]
  def index
    @comments = Comment.where({post_id: params[:post_id]})

    render json: {status: "success", data: {commets: @comments}}
  end

  def create
    @comment = Comment.new(comment_params.merge(post_id: params[:post_id]))

    if @comment.save
      render json: {
        status: "success",
        data: {
          comment: @comment.as_json(include: :user)
        }
      }, status: :created
    else
      render json: {
        status: "fail",
        error: { message: "Couldn't create comment" }
      }, status: :unprocessable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: {status: "success", data: {comment: @comment}}
    else
      render json: {status: "fail", error: {message: "Couldn't udpate comment."}}, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
  end

  private

  def find_comment
    @comment = Comment.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: {status: "fail", error: {message: "Comment not found"}}, status: :not_found
  end

  def comment_params
    params.require(:comment).permit(:user_id, :comment)
  end
end
