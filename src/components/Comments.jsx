import React from "react";

// eslint-disable-next-line no-unused-vars
function Comment({ value }) {
  const mockValue = {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae repudiandae, vero excepturi dolorem cumque sunt suscipit impedit modi ad blanditiis, ullam odio eveniet ut repellat maxime. Qui, ullam a?",
    replies: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae repudiandae, vero excepturi dolorem cumque sunt suscipit impedit modi ad blanditiis, ullam odio eveniet ut repellat maxime. Qui, ullam a?",
    ],
  };
  return (
    <>
      <div>{mockValue.message}</div>
      {mockValue.replies.length && (
        <Comments comments={mockValue.replies} open={true} />
      )}
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Comments({ comments, open }) {
  return (
    <div className="comments-wrapper">
      {open && comments.map((Comment) => <Comment key />)}
    </div>
  );
}

export default Comments;
