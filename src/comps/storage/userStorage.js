import user from './user';


class userStorage {
  storage = [];
  activeUser = 0;
  
  constructor(props){
    this.storage.push(new user('a', 'a', 0, 'a', 'a', 0));
  }


  createNewUser(username, password, country, phone, bal){
    let i = this.storage.length;
    let newuser = new user(username, password, i, country, phone, bal);
    this.storage.push(newuser);
    console.log(this.storage);
  }

  login (username, password) {
    for (let i = 0; i < this.storage.length; i++){
      if (username === this.storage[i].username) {
        if (password === this.storage[i].password){
          return i;
        }
        alert ("Password incorrect");
        return 0;
      }
    }
    alert ("no such user");
    return 0;
  }
}

export default userStorage;