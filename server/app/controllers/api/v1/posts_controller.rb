class Api::V1::PostsController < ApplicationController
  before_action :find_post, only: [:destroy, :update, :show]

  def index
    @posts = Post.includes(:likes, :comments, :post_sections).all.order(created_at: :desc)

    render json: {
      status: "success",
      data: {
        posts: @posts.as_json(include: {
          likes: {},
          comments: { include: :user },
          post_sections: {}
        })
      }
    }
  end

  def show
    render json: {
      status: "success",
      data: {
        post: @post.as_json(include: {
          likes: {},
          comments: { include: :user },
          post_sections: {}
        })
      }
    }
  end

  def create
    ActiveRecord::Base.transaction do
      @post = Post.new(post_params)

      if @post.save
        # Create post sections with the merged post_id
        post_sections = post_section_params.map do |section|
          section.merge(post_id: @post.id)
        end
        PostSection.create!(post_sections)

        render json: {
          status: "success",
          data: {
            post: @post.as_json(include: {
              likes: {},
              comments: { include: :user },
              post_sections: {}
            })
          }
        }, status: :created
      else
        raise ActiveRecord::Rollback
      end
    end
  rescue => e
    render json: {
      status: "fail",
      error: { message: "Couldn't create post", details: e.message }
    }, status: :unprocessable_entity
  end

  def update
    if @post.update(post_params)
      render json: {
        status: "success",
        data: {
          post: @post.as_json(include: {
            likes: {},
            comments: { include: :user },
            post_sections: {}
          })
        }
      }
    else
      render json: {
        status: "fail",
        error: { message: "Couldn't update post" }
      }, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :image, :title)
  end

  def post_section_params
    params.require(:post_sections).map do |post_section|
      post_section.permit(:title, :content)
    end
  end

  def find_post
    @post = Post.includes(:likes, :comments).find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: {status: "fail", error: { message: "Couldn't find post" }}, status: :not_found
  end
end
