import React, { Component } from "react";
import { connect } from "react-redux";

// import reducer from "../../ducks/reducer";

class ProfileInfo extends Component {
  constructor() {
    super();
    this.state = {
      isEmployer: false,
      isJobSeeker: false
    };
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
        <input />
        Last Name :
        <input />
        Company Name:
        <input />
        Email:
        <input />
        Bio :
        <input />
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
        ; First Name:
        <input />
        Last Name :
        <input />
        Email:
        <input />
        Bio :
        <input />
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  {}
)(ProfileInfo);
