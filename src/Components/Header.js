import React from "react";
import { NavLink } from "react-router-dom";
import FormikPost from "./FormikPost";
import FormikLesson from "./Formik";

function Header() {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/foo">Quote</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/post">OnePost</NavLink>
      <NavLink to="/formik">FormikPost</NavLink>
      <NavLink to="/oldformik">OldFormik</NavLink>
    </nav>
  );
}
export default Header;
