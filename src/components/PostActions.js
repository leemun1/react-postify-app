import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const PostActions = (props) => {

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Post</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps)(PostActions);