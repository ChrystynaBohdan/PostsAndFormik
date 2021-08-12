import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const OnePost = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`, {})
      .then(function (response) {
        // const updatedValue = {};
        setPost({ ...response.data }); // why copy empty object?  https://flaviocopes.com/react-usestate-object/
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="one-post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default OnePost;
