import React, { useEffect, useState } from "react";
import "./Lists.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Lists = () => {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    setPosts(data);
  };

  const { category } = useParams();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="inners">
        {posts?.map((post) => {
          if (post.category === category) {
            return (
              <div className="list" key={post.id}>
                <Link to={`/detail/${post.id}`} key={post.id}>
                  <img
                    className="photo"
                    src="http://localhost:3000/image/bg1.jpg"
                    alt="이미지"
                  />
                </Link>
                <div className="text">{post.title}</div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Lists;
