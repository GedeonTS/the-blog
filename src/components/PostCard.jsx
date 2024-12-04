import React from "react";
import placeholderImage from "../mockingdata/images/serve-air-airplane.jpg";
import { useNavigate } from "react-router-dom";
const PostCard = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/posts/1");
  };
  return (
    <div
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-[6px] mb-6 hover:cursor-pointer"
      onClick={clickHandler}
    >
      <div>
        <img src={placeholderImage} alt="" />
      </div>
      <div>
        <p className="text-blue-400 text-sm">Jan, 13 2024</p>
        <h3 className="font-semibold text-primary-950 dark:text-primary-300">
          React native development
        </h3>
        <p className="text-primary-700 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          accusantium et incidunt...
        </p>
      </div>
    </div>
  );
};

export default PostCard;
