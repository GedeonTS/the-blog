import React, { useState } from "react";
import NavBar from "../components/NavBar";
import planeImg from "../mockingdata/images/serve-air-airplane.jpg";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import { GoPlus } from "react-icons/go";
import LoginPopup from "../popups/LoginPopup";
import SignUpPopup from "../popups/SignUpPopup";

const Post = ({ post }) => {
  const [isLogingIn, setIsLogingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
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
            <h2 className="font-semibold text-4xl text-primary-950 mt-[3rem] dark:text-primary-200">
              REACT NATIVE DEVELOPMENT
            </h2>
            <p className="text-lg text-primary-500">
              by GEDEON TSHOBOHWA (Full stack developer)
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
        <img src={planeImg} className="w-full" />
        {[1, 2, 3, 4, 5].map((number) => (
          <div>
            <h4 className="font-semibold text-2xl text-primary-950 my-4 dark:text-primary-200">
              Section title number one
            </h4>
            <p className="text-primary-600 dark:text-primary-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit libero, magnam eaque nam labore voluptatum cum saepe
              omnis aliquam provident expedita, in, laboriosam et illo? Atque
              facilis quo fugit, magni dolore tempore unde assumenda debitis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, officiis iusto, autem vero consectetur consequuntur
              voluptatibus esse obcaecati omnis quidem sint, reprehenderit
              quibusdam cupiditate ducimus veniam deleniti sunt illo? Odio
              aperiam fugiat saepe suscipit illum excepturi cupiditate nihil
              culpa voluptate, voluptas, doloremque alias neque veritatis! Iusto
              et illum eveniet minima sequi consequatur accusantium repellat non
              expedita sit enim culpa nisi officia, deserunt, voluptates, quis
              dolor nemo? Laboriosam, quisquam voluptatibus veniam ipsam eveniet
              incidunt doloremque assumenda perferendis consectetur saepe
              commodi rerum, ipsa quidem iusto atque illum. Beatae accusantium
              enim et deserunt ea, optio, maxime eius libero modi distinctio
              perspiciatis dolores qui.
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
