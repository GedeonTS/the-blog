import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/slices/posts/postActions";

function Blog() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <div className="dark:bg-primary-950 dark:text-white">
      <NavBar />
      <section className="w-full" id="home">
        <div className="w-full flex items-center justify-center py-[2rem] border-b border-primary-200 dark:border-primary-800">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="font-semibold text-6xl text-primary-950 mt-[3rem] dark:text-primary-300">
              USHINDI GEDEON
            </h2>
            <p className="text-lg text-primary-500">Full stack developer</p>
          </div>
        </div>
        <div className=" self-center my-6">
          <h1 className="text-center font-semibold text-2xl text-primary-950 dark:text-primary-300">
            Welcome to my blog
          </h1>
          <p className="text-center font-semibold text-primary-400">
            Here you will find all the latest news and updates from the world of
            tech
          </p>
        </div>
      </section>
      <section className="w-full p-4">
        <h2 className="font-semibold text-4xl text-center text-primary-950 my-8 dark:text-primary-300">
          Recent posts
        </h2>
        <div className="w-full md:w-[75%] mx-auto my-4 gap-4">
          {posts[0] && <PostCard post={posts[0]} />}
        </div>
        <div className="w-full md:w-[75%] mx-auto grid-cols-1 md:grid-cols-2 grid gap-4">
          {posts[1] && <PostCard post={posts[1]} />}
          {posts[2] && <PostCard post={posts[2]} />}
        </div>
      </section>
      <section className="w-full p-4">
        <h2 className="font-semibold text-center text-4xl text-primary-950 my-8 dark:text-primary-300">
          All the posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10">
          {posts.slice(3, posts.length).map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
