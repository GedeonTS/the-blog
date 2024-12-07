import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NewPostSection from "../components/NewPostSection";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { postPost } from "../redux/slices/posts/postActions";
import { resetPostPosted } from "../redux/slices/posts/postsSlice";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { postPosted } = useSelector((state) => state.posts);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const [post, setPost] = useState({
    title: "",
    image: "",
  });

  const [addingSection, setAddingSection] = useState(false);

  const [newSection, setNewSection] = useState({
    title: "",
    content: "",
  });
  const [sections, setSections] = useState([]);

  const submitSectionHandler = () => {
    if (title === "" || content === "") {
      toast.error("Add title and content");
      return;
    }

    setTitle("");
    setContent("");

    setSections([...sections, { title, content }]);
    setAddingSection(false);
  };

  const submitTitleAndImageHandler = () => {
    if (title === "" || image === "") {
      toast.error("Add title and image");
      return;
    }
    setPost({ title, image });
    setTitle("");
    setImage("");
  };

  const submitHandler = () => {
    dispatch(
      postPost({ post: { ...post, user_id: 2 }, post_sections: sections })
    );
  };

  useEffect(() => {
    if (!postPosted) return;
    dispatch(resetPostPosted());
    navigate("/blog");
  }, [postPosted]);

  return (
    <div className="px-[10%] pt-[4rem] dark:bg-primary-950 min-h-[100vh]">
      <NavBar />
      <div className="p-4 w-full border border-primary-200 flex flex-col gap-4 dark:border-primary-700">
        {!post.title && !post.image && (
          <>
            <input
              placeholder="Post title"
              className="h-[2.5rem] px-4 border border-primary-200 focus:outline-none focus:border-2 focus:border-primary-950 dark:border-primary-700 dark:bg-primary-950 dark:text-primary-200"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              placeholder="Image Url"
              className="h-[2.5rem] px-4 border border-primary-200 focus:outline-none focus:border-2 focus:border-primary-950 dark:border-primary-700 dark:bg-primary-950 dark:text-primary-200"
              onChange={(e) => setImage(e.target.value)}
            />

            <div className="w-full flex justify-end">
              <button
                className="h-[2.2rem] rounded-md px-4 bg-primary-950 text-white dark:text-primary-950 dark:bg-white"
                onClick={submitTitleAndImageHandler}
              >
                Add title and image
              </button>
            </div>
          </>
        )}

        {post.title && (
          <h2 className="font-semibold uppercase text-4xl text-center text-primary-950 dark:text-primary-200">
            {post.title}
          </h2>
        )}
        {post.image && (
          <div className="w-full h-[75vh] bg-yellow-200">
            <img
              src={post.image}
              className="w-full h-full object-center object-cover"
            />
          </div>
        )}

        {/* <label
          htmlFor="file-input"
          className="w-full py-4 flex items-center justify-center border border-primary-200 cursor-pointer text-primary-700 dark:border-primary-700"
        >
          <CiImageOn size={128} />
        </label> */}
        {/* <input
          id="file-input"
          type="file"
          accept="image/*"
          className="hidden"
        /> */}

        {sections.map((section) => (
          <div className="w-full grid grid-cols-1 gap-4">
            <h3 className="text-2xl font-semibold text-primary-950 dark:text-primary-100">
              {section.title}
            </h3>
            <p className="text-primary-700 dark:text-primary-500">
              {section.content}
            </p>
          </div>
        ))}
        {addingSection && (
          <>
            <NewPostSection
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
            />
            <div className="w-full flex items-center justify-end">
              <button
                className="h-[2.2rem] rounded-md px-4 bg-primary-950 text-white dark:text-primary-950 dark:bg-white"
                onClick={submitSectionHandler}
              >
                Add section
              </button>
            </div>
          </>
        )}
        {!addingSection && post.title && post.image && (
          <div className="w-full flex justify-end gap-4">
            <button
              className="h-[2.2rem] rounded-md px-4 bg-primary-950 text-white dark:text-primary-950 dark:bg-white"
              onClick={() => setAddingSection(true)}
            >
              New section
            </button>
            <button
              className="h-[2.2rem] rounded-md px-4 bg-primary-950 text-white dark:text-primary-950 dark:bg-white"
              onClick={submitHandler}
            >
              Submit post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPost;
