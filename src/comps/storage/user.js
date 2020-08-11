

class user {
  username;
  password;
  id;
  country;
  phone;
  balance;

  constructor (username, password, id, country, phone, balance){
    this.username = username;
    this.password = password;
    this.id = id;
    this.country = country;
    this.phone = phone;
    this.balance = balance;
  }

  makeDeposit(i){
    this.balance += parseFloat(i);
    alert("new balance is " + this.balance);
    
  }
  makeWithdraw(i){
    this.balance -= parseFloat(i);
    alert("new balance is " + this.balance);
  }
}

export default user;