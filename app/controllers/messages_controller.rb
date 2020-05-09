class MessagesController < ApplicationController
  def index
  end

  def create
    Message.create(message_params)
  end

  private
  def
    params.require(:message).permit(:content, :image)
  end
end
