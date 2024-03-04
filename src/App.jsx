import { useState, createContext, useEffect } from "react";
import CreatePost from "./components/CreatePost.jsx";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts.jsx";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [posts, setPosts] = useState([
    { title: "Hello, world!", content: "React context is great :)" },
    { title: "But...", content: "It's a little confusing at first!" },
  ]);

  useEffect(() => {
    if (localStorage.getItem("posts")) {
      setPosts(JSON.parse(localStorage.getItem("posts")));
    }
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          appName: "Next-gen Social Media",
          posts: posts,
          setPosts: setPosts,
        }}
      >
        <Header />
        <CreatePost />
        <Posts />
      </AppContext.Provider>
    </>
  );
}

export { App };
