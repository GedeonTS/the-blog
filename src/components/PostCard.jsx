import React from "react";
import placeholderImage from "../mockingdata/images/serve-air-airplane.jpg";
import { useNavigate } from "react-router-dom";
const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/posts/${post.id}`);
  };
  return (
    <div
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-[6px] mb-6 hover:cursor-pointer"
      onClick={clickHandler}
    >
      <div>
        <img src={post.image} alt={post.title} />
      </div>
      <div>
        <p className="text-blue-400 text-sm">
          {new Date(post.created_at).toDateString()}
        </p>
        <h3 className="font-semibold text-primary-950 dark:text-primary-300">
          {post.title}
        </h3>
        <p className="text-primary-700 text-sm">
          {post.post_sections[0]?.content.slice(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default PostCard;
