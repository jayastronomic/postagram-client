import { Component } from "react";
import  AviUploader from '../AviUploader'
import { updateAuthUserSuccess, toggleEditProfileModal } from '../../actions/userActions'


import { connect } from "react-redux"

const API = "http://localhost:3001/api/v1/users/"



class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      fullName: this.props.full_name,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let updatedUser = {
      username: this.state.username,
      full_name: this.state.fullName
    }

    const payload = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUser),
      credentials: "include"
    }

    fetch(API +`${this.props.id}`, payload)
    .then(resp => resp.json())
    .then(resObj => {
      this.props.updateAuthUserSuccess(resObj)
      this.props.toggleEditProfileModal(false)
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    
    return (
      <form onSubmit={this.handleSubmit} className="bg-white w-2/5 h-full flex flex-col rounded-2xl">
        <div className="flex justify-between bg-white items-center pt-2 pb-2 rounded-t-2xl border-b">
          <div className="flex space-x-8 pl-4">
            <button
              onClick={() =>
                this.props.toggleEditProfileModal(!this.props.editProfileModal)
              }
              style={{ borderRadius: "50%" }}
              className="text-blue-500 text-2xl hover:bg-blue-100 px-2 focus:outline-none"
            >
              X
            </button>
            <h1 className="font-bold text-2xl">Edit Profile</h1>
          </div>
          <div className="flex pr-4">
            <button className="font-bold text-white text-lg bg-blue-500 text-center px-4  rounded-full">
              Save
            </button>
          </div>
        </div>
        <div className="flex bg-white justify-center pt-4">
          {this.props.avatar_url ? <div
            style={{ backgroundImage: `url(${this.props.avatar_url})` }}
            className="avatar"
          ></div> : <AviUploader />

        }
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <input
            className="h-16 border border-gray-400 pl-4 rounded focus:outline-none  focus:border-blue-500 focus:ring"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
          />
          <input
            className="h-16 border border-gray-400 pl-4 rounded focus:outline-none  focus:border-blue-500 focus:ring"
            placeholder="Full Name"
            value={this.state.fullName}
            onChange={this.handleChange}
            name="fullName"
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  updateAuthUserSuccess,
  toggleEditProfileModal
}


export default connect(null, mapDispatchToProps)(EditProfileForm);