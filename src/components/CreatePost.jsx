import { useState, useContext } from "react";
import { AppContext } from "../App";

const INITIAL_POST = {
  title: "",
  content: "",
};

export default function CreatePost() {
  const context = useContext(AppContext);

  const [post, setPost] = useState(INITIAL_POST);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
    localStorage.setItem("posts", JSON.stringify([...context.posts, post]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    context.setPosts([...context.posts, post]);
    setPost(INITIAL_POST);
    localStorage.setItem("posts", JSON.stringify([...context.posts, post]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={post.title}
        ></input>
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          cols={50}
          rows={5}
        ></textarea>
      </label>
      <br />
      <input type="submit" value="Post!"></input>
    </form>
  );
}
