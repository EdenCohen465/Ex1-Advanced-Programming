
import LoginPage from './loginPage/LoginPage';
import React, { useState } from 'react';
import MainPage from './mainPage/MainPage';

function App() {

  const usersList = [{name:'eden', password:'123'},{name:'roni', password:'1234'}];
 
  const NewUser = {
    name:"",
    password:""
  }
  const [error, setError] = useState("");
  const [user, setUser] = useState(usersList);
  
  const Login = details=>{
    let isIn = false;
    console.log(details);
    usersList.map((d)=> {
      if (d.name == details.name && d.password == details.password){
        console.log('found');
        isIn = true;
        // JUMP TO CHAT
        <MainPage users={usersList} />}
      else if (d.name == details.name) {
        console.log('wrong password');
        isIn = true;
      }
      });
    // IF DIDNT FOUND- NEED TO REGISTER
    if(!isIn){
    console.log('YOU NEED TO REGISTER');
    }
  }
 
  return (
    <div className="App">
      <LoginPage Login={Login} error={error} />
    </div>
  );

}

export default App;
