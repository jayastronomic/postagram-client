import React from "react";
import "../../styles/Login.css";

import LoginPartial from "./LoginPartial";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="flex flex-col px-20 bg-gray-100 h-screen items-center space-y-4">
      <div className="flex flex-col items-center bg-white border border-gray-300 h-96 mt-20 w-80">
        <h1 className="pacifico text-4xl pt-6 text-gray-800 select-none">
          Postagram
        </h1>
        <LoginPartial history={props.history} handleLogin={props.handleLogin} />
      </div>
      <div className="flex border border-gray-300 w-80 justify-center text-sm py-4 bg-white">
        <p>
          Don't have an account?
          <Link to="/signup" className="text-blue-500 font-bold">
            {" "}
            Sign up{" "}
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;