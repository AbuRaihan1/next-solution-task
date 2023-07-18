import React, { useEffect, useState } from "react";
import Title from "../Title/Title";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  return (
    <>
      <Title titleText="Blog" />
      <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            style={{ boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.4)" }}
            key={post.id}
            className="py-5 px-4 mb-4 rounded-xl m-2"
          >
            <h2 className="text-xl font-bold mb-6 text-white text-center">
              {post.title}
            </h2>
            <p className="text-justify">{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
