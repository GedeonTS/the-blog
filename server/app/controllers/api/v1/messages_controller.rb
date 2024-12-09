class Api::V1::MessagesController < ApplicationController
  before_action :find_message, only: [:show]
  def index
    @messages = Message.all

    render json: {status: "success", data: {messages: @messages}}
  end

  def show
    render json: {status: "success", data: {message: @message}}
  end

  def create
    @message = Message.new(message_params)

    if @message.save
      render json: {status: "success", data: {message: @message}}, status: :created
    else
      render json: {status: "fail", error: {message: "Couldn't create message"}}, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:subject, :email, :message)
  end

  def find_message
    @message = Message.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: {status: "fail", error: {message: "Couldn't find message"}}, status: :not_found
  end
end
