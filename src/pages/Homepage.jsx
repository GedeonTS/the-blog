import React, { useEffect, useState } from "react";
// import Menu from "../components/Menu";
import "./styles.css";
import horizon from "../assets/horizon.jpg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import CircularIconBtn from "../components/CircularIconBtn";
import { BsMedium, BsTwitter } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { FiLinkedin } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { postMessage } from "../redux/slices/messages/messagesActions";
import { toast } from "react-toastify";
import { resetMessagePosted } from "../redux/slices/messages/messagesSlice";
import { Link } from "react-router-dom";
import { getPosts } from "../redux/slices/posts/postActions";

function Homepage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { messagePosted } = useSelector((state) => state.messages);
  const { posts } = useSelector((state) => state.posts);

  const submitMessageHandler = () => {
    const newMessage = { message, subject, email };

    if (!message || !email || !subject) {
      toast.error("All fields are required!");
      retur;
    }
    dispatch(postMessage({ message: newMessage }));
  };

  useEffect(() => {
    if (!messagePosted) return;
    setEmail("");
    setSubject("");
    setMessage("");
    dispatch(resetMessagePosted());
  }, [messagePosted]);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className=" dark:bg-primary-950">
      <NavBar />
      <section className="w-full" id="home">
        <div className="w-full flex items-center justify-center py-[2rem] border-b border-primary-200 dark:border-primary-800">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-semibold text-6xl text-primary-950 mt-[3rem] dark:text-white">
              USHINDI GEDEON
            </h2>
            <p className="text-lg text-primary-500">Full stack developer</p>
          </div>
        </div>
        <div className=" self-center my-6">
          <h1 className="text-center font-semibold text-2xl text-primary-950 dark:text-primary-200">
            Welcome to my blog
          </h1>
          <p className="text-center font-semibold text-primary-400">
            Here you will find all the latest news and updates from the world of
            tech
          </p>
        </div>
      </section>
      <section className="p-6" id="about">
        <h2 className="font-semibold text-primary-950 text-3xl my-6 text-center dark:text-primary-200">
          About me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full h-full rounded-[4rem] overflow-hidden">
            <img
              src={horizon}
              alt=""
              className="h-full w-full overflow-hidden"
            />
          </div>
          <div>
            <p className="text-lg text-primary-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
              praesentium officiis. Veritatis sequi repellendus quos ducimus
              recusandae accusantium dolores delectus repellat? Explicabo autem
              nulla quibusdam in saepe minima corrupti quis velit quidem? Alias
              sequi asperiores iste quam temporibus, eligendi suscipit esse
              dolore neque earum. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Minus molestias ullam aut adipisci quod dolorem
              error soluta aspernatur rerum itaque explicabo.
            </p>
            <button className="bg-primary-950 text-white h-[2.4rem] rounded-md px-4 my-6 dark:text-primary-950 dark:bg-primary-300">
              see portfolio
            </button>
          </div>
        </div>
      </section>
      <section className="w-full px-4" id="posts">
        <h2 className="font-semibold text-3xl text-primary-950 text-center my-6 dark:text-primary-300">
          Recent posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10">
          {posts.slice(0, 6).map((post) => (
            <PostCard post={post} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link to={"/blog"}>
            <div className="h-[2.4rem] px-[2rem] rounded-md bg-primary-950 text-white self-center dark:bg-primary-300 dark:text-primary-950 flex items-center justify-center">
              See all
            </div>
          </Link>
        </div>
      </section>
      <section className="w-full pt-6" id="contact">
        <div>
          <h3 className="font-semibold text-3xl text-primary-950 my-6 text-center dark:text-primary-300">
            Contact me
          </h3>
        </div>
        <div className="w-full grid sm:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <div className="w-full grid grid-cols-1 gap-4">
            <input
              type="email"
              value={email}
              className="h-[3rem] pl-4 focus:outline-none border border-primary-300 dark:text-primary-300 dark:bg-primary-950 dark:border-primary-700 w-full focus:border-2 focus:border-primary-950"
              placeholder="Your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="h-[3rem] pl-4 focus:outline-none border border-primary-300 dark:bg-primary-950  dark:text-primary-300 dark:border-primary-700 w-full focus:border-2 focus:border-primary-950"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <textarea
              className="h-[20rem] p-4 focus:outline-none border border-primary-300 dark:text-primary-300 dark:bg-primary-950 dark:border-primary-700 w-full focus:border-2 focus:border-primary-950"
              placeholder="Your message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <div className="w-full flex items-center justify-center">
              <button
                className="bg-primary-950 h-[2.4rem] px-8 text-white rounded-md dark:bg-primary-400 dark:text-primary-950"
                onClick={submitMessageHandler}
              >
                Submit
              </button>
            </div>
          </div>
          <div>
            <p className="text-lg text-primary-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad
              praesentium officiis. Veritatis sequi repellendus quos ducimus
              recusandae accusantium dolores delectus repellat? Explicabo autem
              nulla quibusdam in saepe minima corrupti quis velit quidem?
            </p>
            <div className="w-full flex gap-3 items-center my-8">
              <CircularIconBtn icon={<FiLinkedin size={24} />} />
              <CircularIconBtn icon={<BsTwitter size={24} />} />
              <CircularIconBtn icon={<BsMedium size={24} />} />
              <CircularIconBtn icon={<GrGithub size={24} />} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Homepage;
