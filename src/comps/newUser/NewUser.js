import React from 'react';

class NewUser extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      coun: '',
      bal: '',
      tel: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit = (event) => {
    event.preventDefault();
    const {user, pass, bal, tel, coun} = this.state;
    this.props.store.createNewUser(user, pass, coun, tel, bal);
    this.props.history.push('/');
  }
  

  render(){
    const {user, pass, bal, tel, coun} = this.state;
    return <div>
      <form onSubmit = {this.submit}>
        <p>Username</p>
        <input type = "text" placeholder = "Username" name = "user" value = {user} onChange = {this.onChange}></input>
        <p>password</p>
        <input type = "password" placeholder = "Password"  name = "pass" value = {pass} onChange = {this.onChange}></input>
        <p>Place of residence</p>
        <input type = "text" placeholder = "Country of Residence"  name = "coun" value = {coun} onChange = {this.onChange}></input>
        <p>Starting balance</p>
        <input type = "number"  name = "bal" value = {bal} onChange = {this.onChange}></input>
        <p>Phone number</p>
        <input type = "tel"  name = "tel" value = {tel} onChange = {this.onChange}></input>
        <br/>
        <button type = "submit">Submit</button>
      </form>
    </div>
  }
}

export default NewUser;