import React from "react";
import { Link } from "react-router-dom";

class Withdraw extends React.Component {
  constructor(props){
    super(props);
    this.state = {num : 0}
  }

  onchange = (e) => {
    
    this.setState({num : e.target.value});
  } 
  onclick = (e) => {
    e.preventDefault();
    this.props.with(this.state.num);
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.onclick}>
            <p>Amount to withdraw</p>
            <input type = "number" onChange = {this.onchange} value = {this.state.num}></input>
            <button type = "submit">Submit</button>
        </form>
        <Link to="/user">
          <button>Exit?</button>
        </Link>
      </div>
    );
  }
}

export default Withdraw;
