import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import planeImg from "../mockingdata/images/serve-air-airplane.jpg";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import { GoPlus } from "react-icons/go";
import LoginPopup from "../popups/LoginPopup";
import SignUpPopup from "../popups/SignUpPopup";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/slices/posts/postActions";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { currentPost } = useSelector((state) => state.posts);

  const [isLogingIn, setIsLogingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  useEffect(() => {
    dispatch(getPost({ id }));
  }, []);
  return (
    <div className="w-full min-h-0[100vh] dark:bg-primary-950">
      <NavBar />
      {isLogingIn && (
        <LoginPopup
          closeHandler={() => setIsLogingIn(false)}
          signUpHandler={() => {
            setIsLogingIn(false);
            setIsSigningUp(true);
          }}
        />
      )}
      {isSigningUp && (
        <SignUpPopup
          closeHandler={() => setIsSigningUp(false)}
          loginHandler={() => {
            setIsSigningUp(false);
            setIsLogingIn(true);
          }}
        />
      )}
      <section className="w-full" id="home">
        <div className="w-full flex flex-col items-center justify-center py-[2rem] border-b border-primary-200 dark:border-primary-700">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-semibold text-4xl text-primary-950 mt-[3rem] dark:text-primary-200 uppercase px-10 text-center">
              {currentPost.title}
            </h2>
            <p className="text-lg text-primary-500">
              by USHINDI GEDEON (Full stack developer)
            </p>
          </div>
          <div className="flex gap-4 mt-6 text-primary-950 dark:text-primary-200">
            <AiOutlineLike size={24} onClick={() => setIsLogingIn(true)} />
            <AiFillLike size={24} />
            <a href="#comments">
              <FaRegCommentAlt size={24} />
            </a>
          </div>
        </div>
      </section>
      <section className="w-full px-[12.5%] py-6">
        <img src={currentPost.image} className="w-full" />
        {currentPost.post_sections?.map((postSection) => (
          <div>
            <h4 className="font-semibold text-2xl text-primary-950 my-4 dark:text-primary-200">
              {postSection.title}
            </h4>
            <p className="text-primary-600 dark:text-primary-400">
              {postSection.content}
            </p>
          </div>
        ))}
      </section>
      <section className="w-full px-[12.5%]">
        <section
          className="w-full border-t border-primary-300 mt-8"
          id="comments"
        >
          <div className="w-full flex items-center justify-between py-6">
            <h2 className="font-semibold text-2xl text-primary-950 dark:text-primary-200">
              COMMENTS
            </h2>
            <button
              className="h-[2.4rem] bg-primary-950 text-white flex items-center justify-center gap-2 px-4 rounded-md dark:text-primary-950 dark:bg-white"
              onClick={() => setIsSigningUp(true)}
            >
              <GoPlus size={24} />
              <span>Add comment</span>
            </button>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Post;
