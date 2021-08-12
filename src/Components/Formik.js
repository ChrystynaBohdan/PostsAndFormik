import React from "react";
import { Formik, Field, Form } from "formik";
import { useFormik } from "formik";
import s from "./Formik.module.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values, props) => {
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.channel) {
    errors.channel = "required";
  }
};

const validationSchema = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().email("invalid email format").required("required"),
  channel: Yup.string().required("required"),
});

function FormikLesson() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });
  console.log("Visited fields", formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <div className="formRow">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>

        {formik.touched.name && formik.errors.name ? (
          <div className={s.error}>{formik.errors.name}</div>
        ) : null}
      </div>
      <div className={s.formControl}>
        <div className="formRow">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            className="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className={s.error}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className={s.formControl}>
        <div className="formRow">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="text"
            className="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
        </div>
        {formik.touched.channel && formik.errors.channel ? (
          <div className={s.error}>{formik.errors.channel}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormikLesson;
