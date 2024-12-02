import React from "react";
// import Menu from "../components/Menu";
import "./styles.css";
import horizon from "../assets/horizon.jpg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";

function Homepage() {
  const text =
    "Post lorem ipsum dolor sit atem 1Post lorem ipsum dolor sit atem 1Post lorem ipsum dolor sit atem 1Post lorem ipsum dolor sit atem 1";
  return (
    <div className="homepage">
      <NavBar />
      <div className="w-full flex items-center justify-center py-[2rem] border-b border-primary-200">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="font-semibold text-6xl text-primary-950 mt-[3rem]">
            USHINDI GEDEON
          </h2>
          <p className="text-lg text-primary-500">Full stack developer</p>
        </div>
      </div>
      <div className=" self-center my-6">
        <h1 className="text-center font-semibold text-2xl text-primary-950">
          Welcome to my blog
        </h1>
        <p className="text-center font-semibold text-primary-400">
          Here you will find all the latest news and updates from the world of
          tech
        </p>
      </div>
      <div className="p-6">
        <h2 className="font-semibold text-primary-950 text-3xl my-6 text-center">
          About me
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <img src={horizon} alt="" className="rounded-4xl" />
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
            <button className="bg-primary-950 text-white h-[2.4rem] rounded-md px-4 my-6">
              see portfolio
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-3xl text-primary-950 text-center my-6">
            Recent posts
          </h2>
          <div className="grid grid-cols-3 gap-4 gap-y-10">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <PostCard />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="h-[2.4rem] px-[2rem] rounded-md bg-primary-950 text-white self-center">
              See all
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-3xl text-primary-950 my-6 text-center">
          Contact me
        </h3>
      </div>
      <div className="w-full grid grid-cols-2 gap-4 p-4">
        <div className="w-full grid grid-cols-1 gap-4">
          <input
            type="text"
            className="h-[2.4rem] pl-4 focus:outline-none border border-primary-300 w-full focus:border-2 focus:border-primary-950"
          />
          <textarea className="h-[20rem] p-4 focus:outline-none border border-primary-300 w-full focus:border-2 focus:border-primary-950"></textarea>
          <div className="w-full flex items-center justify-center">
            <button className="bg-primary-950 h-[2.4rem] px-8 text-white rounded-md">
              Submit
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
