import React from 'react';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit = (event) => {
    event.preventDefault();
    let i = this.props.store.login(this.state.user, this.state.pass);
    if (i !== 0) {
      this.props.store.activeUser = i;
      this.props.history.push('/user');
    }
    
  }
  

  render(){
    const {user, pass} = this.state;
    return <div>
      <form onSubmit = {this.submit}>
        <p>Username</p>
        <input type = "text" placeholder = "Username" name = "user" value = {user} onChange = {this.onChange}></input>
        <p>password</p>
        <input type = "password" placeholder = "Password"  name = "pass" value = {pass} onChange = {this.onChange}></input>
        <br/>
        <button type = "submit">Submit</button>
      </form>
    </div>
  }
}

export default Login;