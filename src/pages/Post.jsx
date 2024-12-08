import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import { GoPlus } from "react-icons/go";
import LoginPopup from "../popups/LoginPopup";
import SignUpPopup from "../popups/SignUpPopup";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/slices/posts/postActions";
import { postComment } from "../redux/slices/comments/commentsActions";
import { resetCommentPosted } from "../redux/slices/comments/commentsSlice";
import { postLike } from "../redux/slices/likes/likesActions";

const Post = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  const { currentPost } = useSelector((state) => state.posts);
  const { currentUser } = useSelector((state) => state.users);
  const { commentPosted } = useSelector((state) => state.comments);

  const [isLogingIn, setIsLogingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [comment, setComment] = useState("");

  const submitCommentHandler = () => {
    dispatch(
      postComment({
        comment: { user_id: currentUser.id, comment },
        post_id: postId,
      })
    );
  };

  const submitLike = () => {
    dispatch(postLike({ post_id: postId, user_id: currentUser.id }));
  };

  useEffect(() => {
    dispatch(getPost({ postId }));
  }, []);

  useEffect(() => {
    if (!commentPosted) return;
    dispatch(resetCommentPosted());
    setIsAddingComment(false);
  }, [commentPosted]);

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
            <div className="flex gap-1 items-center">
              {currentPost.likes?.includes(
                (like) => like.user_id === currentUser?.id
              ) ? (
                <div className="hover:cursor-pointer">
                  <AiFillLike size={24} onClick={submitLike} />
                </div>
              ) : (
                <div className="hover:cursor-pointer">
                  <AiOutlineLike size={24} onClick={submitLike} />
                </div>
              )}
              <p className="text-[20px]">{currentPost.likes?.length}</p>
            </div>

            <a href="#comments" className="flex gap-1 items-center">
              <FaRegCommentAlt size={22} />
              <p className="text-[20px]">{currentPost.comments?.length}</p>
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
          className="w-full border-t border-primary-300 my-8"
          id="comments"
        >
          <div className="w-full flex items-center justify-between py-6">
            <h2 className="font-semibold text-2xl text-primary-950 dark:text-primary-200">
              COMMENTS
            </h2>
            {!isAddingComment && (
              <button
                className="h-[2.4rem] bg-primary-950 text-white flex items-center justify-center gap-2 px-4 rounded-md dark:text-primary-950 dark:bg-white"
                onClick={() => setIsAddingComment(true)}
              >
                <GoPlus size={24} />
                <span>Add comment</span>
              </button>
            )}
          </div>
          {isAddingComment && (
            <div className="w-full grid grid-cols-1 gap-4">
              <textarea
                className=" min-h-[10rem] px-4 border border-primary-200 focus:outline-none focus:border-2 focus:border-primary-950 pt-4 dark:bg-primary-950 dark:border-primary-700 dark:text-primary-100"
                placeholder="new comment ..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div className="w-full flex justify-end gap-4">
                <button
                  className="h-[2.4rem] dark:bg-primary-950 border border-primary-400 dark:border-0 dark:text-white flex items-center justify-center gap-2 px-4 rounded-md text-primary-950 bg-white"
                  onClick={() => setIsAddingComment(false)}
                >
                  <span>cancel</span>
                </button>
                <button
                  className="h-[2.4rem] bg-primary-950 text-white flex items-center justify-center gap-2 px-4 rounded-md dark:text-primary-950 dark:bg-white"
                  onClick={submitCommentHandler}
                >
                  <span>submit</span>
                </button>
              </div>
            </div>
          )}
        </section>
        <section className="w-full grid grid-cols-1 gap-4">
          {currentPost.comments?.map((comment) => (
            <div className="w-full md:w-[75%] mx-auto border-b pb-4 mb-4 border-b-primary-200 dark:border-b-primary-800">
              <p className=" text-primary-950 dark:text-primary-300">
                {comment.comment}
              </p>
              <p className=" italic text-primary-300 dark:text-primary-600 text-end">
                by {comment.user?.name}
              </p>
            </div>
          ))}
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Post;
