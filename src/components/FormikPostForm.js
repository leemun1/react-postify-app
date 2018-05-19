import React from 'react';
import moment from 'moment';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const rawForm = ({
  values,
  errors,
  touched
}) => (
  <Form>
    <div>
      { touched.title && errors.title && <p>{ errors.title }</p> }
      <Field type="text" name="title" placeholder="Title" />
    </div>
    <div>
      { touched.body && errors.body && <p>{ errors.body }</p> }
      <Field type="text" name="body" placeholder="Content" />
    </div>
    <Field component="select" name="status">
      <option value="draft">Draft</option>
      <option value="publish">Publish</option>
    </Field>
    <button>Submit</button>
  </Form>
)

const FormikPostForm = withFormik({
  mapPropsToValues({ title, body, status, createdAt }) {
    return {
      title: title || '',
      body: body || '',
      status: status || 'draft',
      createdAt: moment().valueOf()
    };
  },
  handleSubmit(values, { props }) {
    props.onSubmit(values);
  }
})(rawForm);

export default FormikPostForm;
