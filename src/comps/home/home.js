import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/new">
          <button>New User</button>
        </Link>
        <br />
        <Link to="/login">
          <button>Login</button>
        </Link>
        <br />
        <Link to="/">
          <button>Exit?</button>
        </Link>
      </div>
    );
  }
}

export default Home;
