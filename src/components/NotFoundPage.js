import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">404!</h1>
      <p>We are sorry, but the page you requested does not exist.</p>
      <Link className="button" to="/">Go home</Link>
    </div>
  </div>
);

export default NotFoundPage;
