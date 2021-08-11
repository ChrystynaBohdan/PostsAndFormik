import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>NOT FOUND</p>
      <Link to="/home">Back to the HOME page</Link>
    </div>
  );
}
export default NotFound;
