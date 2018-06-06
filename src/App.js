import React, { Component } from "react";
import Landing from "./components/Landing/Landing";
import Login from "./components/login/Login";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import routes from "./routes";
import reset from "../src/reset.css";
import styleSheet from "./components/Landing/Landing.css";

class App extends Component {
  render() {
    return <div className="App">{routes}</div>;
  }
}

export default App;
