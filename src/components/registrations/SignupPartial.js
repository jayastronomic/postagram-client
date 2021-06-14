import React, { Component } from "react";
import { Link } from "react-router-dom";

const API = "http://localhost:3001/api/v1/users";

class SignupPartial extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullName: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  redirect = () => {
    this.props.history.push("/home");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      user: {
        email: this.state.email,
        full_name: this.state.fullName,
        username: this.state.username,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.status === "SUCCESS") {
          this.props.handleLogin(resObj);
        } else {
          console.log(resObj);
        }
      })
      .catch((err) => console.log(err));

    this.setState({
      email: "",
      fullName: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    });

    this.redirect();
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex flex-col pt-8 space-y-2 w-3/4 pb-8"
      >
        <input
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Email"
        />
        <input
          onChange={this.handleChange}
          name="fullName"
          value={this.state.fullName}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Full Name"
        />
        <input
          onChange={this.handleChange}
          name="username"
          value={this.state.username}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Username"
        />
        <input
          onChange={this.handleChange}
          name="password"
          value={this.state.password}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Password"
          type="password"
        />
        <input
          onChange={this.handleChange}
          name="passwordConfirmation"
          value={this.state.passwordConfirmation}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Confirm Password"
          type="password"
        />
        <input
          className={
            this.state.email &&
            this.state.username &&
            this.state.fullName &&
            this.state.password
              ? "bg-blue-500 py-2 rounded font-bold text-white text-sm focus:outline-none cursor-pointer"
              : "bg-blue-200 py-2 rounded font-bold text-white text-sm focus:outline-none"
          }
          type="submit"
          value="Sign up"
          disabled={
            this.state.email &&
            this.state.username &&
            this.state.fullName &&
            this.state.password
              ? false
              : true
          }
        />

        <p className="text-xs text-gray-400 pt-4 text-center">
          By signing up, you agree to our{" "}
          <Link className="font-bold">Terms</Link> ,{" "}
          <Link className="font-bold">Data Policy</Link> and{" "}
          <Link className="font-bold">Cookies Policy</Link> .
        </p>
      </form>
    );
  }
}

export default SignupPartial;
