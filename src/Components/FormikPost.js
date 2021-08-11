import React from "react";
import "antd/dist/antd.css";
import { Formik, Form, Field } from "formik";
import { Button, Form as AntdForm, Input } from "antd";

const FormikPost = () => {
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{
          firsName: "",
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <Input type="email" name="email" />
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormikPost;
