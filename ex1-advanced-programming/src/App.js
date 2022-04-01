
import LoginPage from './loginPage/LoginPage';
import React, { useState, useRef } from 'react';
import MainPage from './mainPage/MainPage';
import usersList from './UsersList';

function App() {

  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");


  const Login = details => {
    console.log(details);
    usersList.map((d) => {
      if (d.name == details.name && d.password == details.password) {
        setUser({
          name: details.name,
          password: details.password
        });
        setError("");
      }
      // the user didnt initialized.
      else if(d.name == details.name && user.name == null) {
        setError("Wrong Password");
      }
      else if(user.name == "" && user.password=="") {
        setError("Please Register");
      }
    });
  }

  const Logout = () => {
    setUser({ name: "", password: "" });
  }
  return (
    <div className="App">{(user.name != ""  && user.password != "") ? (
      <MainPage user={user}/>
      ) : (
      <LoginPage Login={Login} error={error} />)
      }    
      </div>
      );
}

export default App;
