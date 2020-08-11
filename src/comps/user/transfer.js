import React from "react";
import { Link } from "react-router-dom";

class Transfer extends React.Component {
  constructor(props){
    super(props);
    this.state = {num : 0, tar: 0}
  }

  onchange = (e) => {
    this.setState({num : e.target.value});
  } 
  onchange2 = (e) => {
    this.setState({tar: e.target.value})
  }

  onclick = (e) => {
    e.preventDefault();
    this.props.transfer(this.state.num. this.state.tar);
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.onclick}>
            <p>Amount to deposit</p>
            <input type = "number" onChange = {this.onchange} value = {this.state.num}></input>
            <p>ID of target account for transfer</p>
            <input type = "number" onChange = {this.onchange2} value = {this.state.num}></input>
            <button type = "submit">Submit</button>
        </form>
        <Link to="/user">
          <button>Exit?</button>
        </Link>
      </div>
    );
  }
}

export default Transfer;
