import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <header>
        <h1>Logo</h1>
        <Link to="/Login">
          <button> Log in/Sign up </button>
        </Link>
      </header>
    </div>
  );
}

export default Landing;
