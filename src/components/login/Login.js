import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isAuth: false
    };
  }
  render() {
    return (
      <div>
        <input username />
        <input password />
      </div>
    );
  }
}
export default Login;
