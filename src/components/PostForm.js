import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    let post = props.post

    this.state = {
      title: post ? post.title : '',
      body: post ? post.body : '',
      createdAt: post ? moment(post.createdAt) : moment(),
      error: ''
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }
  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.body) {
      this.setState(() => ({ error: 'Please provide title and body.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
        createdAt: this.state.createdAt.valueOf(),
      })
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea
          className="textarea"
          placeholder="What's on your mind today?"
          value={this.state.body}
          onChange={this.onBodyChange}
        >
        </textarea>
        <div>
          {
            this.props.post ? (
              <button className="button">Save</button>
            ) : (
                <button className="button">Add Post</button>
              )
          }
        </div>
      </form>
    )
  }
}