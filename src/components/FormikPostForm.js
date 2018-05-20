import React from 'react';
import moment from 'moment';
import { withFormik, Form, Field } from 'formik';

const Yup = require('yup');

const formikEnhancer = withFormik({
  mapPropsToValues: ({ title, body, status }) => ({
    title: title || '',
    body: body || '',
    status: status || 'draft',
    createdAt: moment().valueOf()
  }),
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required('Title is a required field!'),
    body: Yup.string()
      .required('Content is a required field!')
  }),
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
  displayName: 'MyForm'
});

const MyForm = ({
  values,
  errors,
  touched
}) => (
  <Form className="form">
    {touched.title && errors.title && <p className="form__error">{errors.title}</p>}
    <Field className="text-input" type="text" name="title" placeholder="Title" />
    {touched.body && errors.body && <p>{errors.body}</p>}
    <Field className="textarea" component="textarea" name="body" placeholder="Content" />
    <div>
      <Field className="select" component="select" name="status">
        <option value="draft">Draft</option>
        <option value="publish">Publish</option>
      </Field>
    </div>
    <div>
      {
        values.title ? (
          <button className="button">Save</button>
        ) : (
          <button className="button">Add Post</button>
        )
      }
    </div>
  </Form>
);

export default formikEnhancer(MyForm);
