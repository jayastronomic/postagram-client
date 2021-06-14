import React, { Component } from "react";

import { connect } from "react-redux";
import {
  togglePostModal,
  createPostSuccess,
  createAuthUserPostsSuccess,
} from "../../actions/postActions";

const API = "http://localhost:3001/api/v1/posts";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newPost = {
      content: this.state.content,
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        this.props.createPostSuccess(resObj);
        this.props.createAuthUserPostsSuccess(resObj);
      })
      .catch((err) => console.log(err));

    this.props.togglePostModal(false);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="pt-2">
        <div className="border-b-2 border-blue-400 pl-2 text-xl ">
          <span
            onClick={() => this.props.togglePostModal(false)}
            className="text-blue-400 font-bold cursor-pointer"
          >
            X
          </span>
        </div>
        <div className="pl-14 pt-4">
          <textarea
            onChange={this.handleChange}
            name="content"
            value={this.state.content}
            placeholder="What's happening?"
            className="w-full h-72 resize-none text-xl border-b-2 border-blue-400 outline-none"
          />
        </div>
        <div className="flex justify-end pr-10 pb-4">
          <input
            type="submit"
            value="Post"
            className="text-xl bg-blue-400 text-white px-4 py-2 rounded-full px-10 font-bold outline-none hover:bg-blue-500"
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  togglePostModal,
  createPostSuccess,
  createAuthUserPostsSuccess,
};

export default connect(null, mapDispatchToProps)(PostForm);
