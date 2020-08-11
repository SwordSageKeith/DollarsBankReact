import React from "react";
import { Switch, Route } from "react-router-dom"; 
import UserUI from './userUI';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Transfer from './transfer';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID : this.props.store.activeUser,
      store : this.props.store
    };
  }

  deposit = (i) => {
    this.state.store.storage[this.state.ID].makeDeposit(i);
    this.props.history.push('/user');
  }
  withdraw = (i) => {
    this.state.store.storage[this.state.ID].makeWithdraw(i);
    this.props.history.push('/user');
  }
  transfer = (i, j) => {
    this.state.store.storage[this.state.ID].makeWithdraw(i);
    this.state.store.storage[j].makeDeposit(i);
    this.props.history.push('/user');
  }


  render() {
    return (
      <Switch>
        <Route path = "/user/deposit" render = {(props) => <Deposit {...props} depo = {this.deposit} /> } />
        <Route path = "/user/withdraw" render = {(props) => <Withdraw {...props} with = {this.withdraw} /> } />
        <Route path = "/user/transfer" render = {(props) => <Transfer {...props} with = {this.transfer} /> } />
        <Route path = "*" render = {(props) => <UserUI />}/>
      </Switch>
    );
  }
}

export default UserHome;
