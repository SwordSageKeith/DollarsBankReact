import React from "react";
import { Link } from "react-router-dom";

class UserUI extends React.Component {


  render() {
    return (
      <div>
        <Link to="/user/deposit">
          <button>Deposit</button>
        </Link>
        <br />
        <Link to="/user/withdraw">
          <button>Withdraw</button>
        </Link>
        <br />
        <Link to="/user/transfer">
          <button>Transfer</button>
        </Link>
        <br />
        <Link to="/user/recent">
          <button>recent transactions</button>
        </Link>
        <br />
        <Link to="/">
          <button>Exit?</button>
        </Link>
      </div>
    );
  }
}

export default UserUI;
