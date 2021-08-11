// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
//
// const postsURL = "https://jsonplaceholder.typicode.com/posts";
//
// function Posts() {
//   const [posts, setPosts] = useState([]);
//
//   useEffect(() => {
//     axios
//       .get(postsURL, {})
//       .then(function (response) {
//         setPosts(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, []);
//
//   return (
//     <div>
//       <ul>
//         {posts.map((post) => (
//           <Link to={`/post/${post.id}`}>
//             <li key={post.id}>
//               {post.id}. {post.title}
//             </li>
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Posts;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Input } from "antd";
import { Form, Formik } from "formik";

const postsURL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [numberOfPostToBeShown, setnumberOfPostToBeShown] = useState(1);
  const [visiblePosts, setvisiblePosts] = useState([]);

  useEffect(() => {
    axios
      .get(postsURL, {})
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleClick() {
    setnumberOfPostToBeShown(numberOfPostToBeShown + 1);
    setvisiblePosts(posts.slice(0, numberOfPostToBeShown));
  }

  return (
    <div>
      {/*<button onClick={handleClick}>Get Post</button>*/}
      <Formik
        initialValues={{
          firsName: "",
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <Input type="email" name="email" />
              <Button type="primary" htmlType="submit" onClick={handleClick}>
                Submit
              </Button>
            </Form>
          </div>
        )}
      </Formik>

      <ul>
        {visiblePosts.map((post) => (
          <Link to={`/post/${post.id}`}>
            <li key={post.id}>
              {post.id}. {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default Posts;
