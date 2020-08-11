import React from "react";
import "./App.css";
import Home from "./comps/home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewUser from "./comps/newUser/NewUser";
import Login from './comps/login/login';
import UserHome from './comps/user/user';

import userStorage from './comps/storage/userStorage';

class App extends React.Component {
  constructor(props){
    super(props);
    let store = new userStorage;
    this.state = ({
      storage: store
    });
  }
  

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/new" render = {(props) => <NewUser {...props} store = {this.state.storage}/>} />
          <Route path="/login" render = {(props) => <Login {...props} store = {this.state.storage}/>} />
          <Route path = "/user" render = {(props) => <UserHome {...props} store = {this.state.storage} />} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
