import React from 'react';
import moment from 'moment';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const rawForm = ({
  values,
  errors,
  touched,
  isSubmitting
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
    <button disabled={isSubmitting}>Submit</button>
  </Form>
)

const PostForm = withFormik({
  mapPropsToValues({ title, body, status }) {
    return {
      title: title || '',
      body: body || '',
      status: status || 'draft',
      createdAt: moment()
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().min(1).required(),
    body: Yup.string().min(1).required()
  }),
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    resetForm();
    props.onSubmit(values);
  }
})(rawForm);

export default PostForm;
