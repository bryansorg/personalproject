import React, { Component } from "react";
import { connect } from "react-redux";

import reducer from "../../ducks/reducer";
import { submitForm } from "../../ducks/reducer";
import styleSheet from "../ProfileInfo/profileInfo.css";

class ProfileInfo extends Component {
  constructor() {
    super();
    this.state = {
      isEmployer: false,
      isJobSeeker: false,
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      bio: "",
      companyBio: ""
    };
  }

  handleFirst(e) {
    console.log(e.target.value);

    this.setState({
      firstName: e.target.value
    });
  }
  handleLast(e) {
    console.log(e.target.value);
    this.setState({
      lastName: e.target.value
    });
  }
  handleMail(e) {
    console.log(e.target.value);
    this.setState({
      email: e.target.value
    });
  }

  handleBio(e) {
    console.log(e.target.value);
    this.setState({
      bio: e.target.value
    });
  }

  handleCompanyBio(e) {
    console.log(e.target.value);
    this.setState({
      companyBio: e.target.value
    });
  }

  handleCompanyName(e) {
    console.log(e.target.value);
    this.setState({
      companyName: e.target.value
    });
  }

  handleChange1() {
    this.setState(
      {
        isEmployer: !this.state.isEmployer
      },
      () => this.profileAlert()
    );
  }

  handleChange2() {
    this.setState(
      {
        isJobSeeker: !this.state.isJobSeeker
      },
      () => this.profileAlert()
    );
  }

  profileAlert() {
    if (this.state.isEmployer === true && this.state.isJobSeeker === true) {
      alert("Error: Can not be both profile types unde one user!!");
    }
  }

  isCompany() {
    return (
      <div>
        Employer
        <input
          type="checkbox"
          onChange={() => {
            this.handleChange1();
          }}
        />
        Job Seeker
        <input
          onChange={() => {
            this.handleChange2();
          }}
          type="checkbox"
        />
        First Name:
        <input
          value={this.state.firstName}
          onChange={e => {
            this.handleFirst(e);
          }}
        />
        Last Name :
        <input
          value={this.state.lastName}
          onChange={e => {
            this.handleLast(e);
          }}
        />
        Company Name:
        <input
          value={this.state.companyName}
          onChange={e => {
            this.handleCompanyName(e);
          }}
        />
        Email:
        <input
          value={this.state.email}
          onChange={e => {
            this.handleMail(e);
          }}
        />
        Company Bio :
        <input
          value={this.state.companyBio}
          onChange={e => {
            this.handleCompanyBio(e);
          }}
        />
        <button
          onClick={() => {
            submitForm(
              this.state.isEmployer,
              this.state.isJobSeeker,
              this.state.firstName,
              this.state.lastName,
              this.state.email,
              this.state.companyBio,
              this.state.companyName
            );
          }}
        >
          Submit!
        </button>
      </div>
    );
  }
  render() {
    {
      if (this.state.isEmployer === true) {
        return this.isCompany();
      }
    }

    return (
      <div>
        Employer
        <input
          onChange={() => {
            this.handleChange1();
          }}
          type="checkbox"
        />
        Job Seeker
        <input
          onChange={() => {
            this.handleChange2();
          }}
          type="checkbox"
        />
        First Name:
        <input
          value={this.state.firstName}
          onChange={e => {
            this.handleFirst(e);
          }}
        />
        Last Name :
        <input
          value={this.state.lastName}
          onChange={e => {
            this.handleLast(e);
          }}
        />
        Email:
        <input
          value={this.state.email}
          onChange={e => {
            this.handleMail(e);
          }}
        />
        Bio :
        <input
          value={this.state.bio}
          onChange={e => {
            this.handleBio(e);
          }}
        />
        <button
          onClick={() => {
            submitForm(
              this.state.isEmployer,
              this.state.isJobSeeker,
              this.state.firstName,
              this.state.lastName,
              this.state.email,
              this.state.bio,
              this.state.companyName
            );
          }}
        >
          Submit!
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  {}
)(ProfileInfo);
