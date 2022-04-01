
import LoginPage from './loginPage/LoginPage';
import React, { useState, useRef } from 'react';
import MainPage from './mainPage/MainPage';
import usersList from './UsersList';
import RegisterPage from './registerPage/RegisterPage';

function App() {

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");


  const Login = details => {
    console.log(details);
    usersList.map((d) => {
      if (d.username == details.username && d.password == details.password) {
        setUser({
          username: details.username,
          password: details.password
        });
        setError("");
      }
      // the user didnt initialized.
      else if (d.username == details.username && user.username == null) {
        setError("Wrong Password");
      }
      else if (user.username == "" && user.password == "") {
        setError("Please Register");
      }
    });
  }


  const submit = _ => {
    //getting the values of all inputs.
    const user_name = document.getElementById('username').value;
    const nick_name = document.getElementById('nickname').value;
    const photo_ = document.getElementById('photo').value;
    const password_ = document.getElementById('password').value;
    const passwordagain = document.getElementById('password-again').value;

    usersList.map((user) => {
      if (user.username == user_name) {
        alert('Username already taken! enter another username :)');
        return;
      }
    });

    if (password_ != passwordagain) {
      alert('The passwords does not match, please register again.');
      return;
    }

    // check with numbers and letters
    usersList.push({
      username: user_name,
      nickname: nick_name,
      photo: photo_,
      password: password_
    });

    setUser({
      username: user_name,
      password: password_
    });
  }


  const Logout = () => {
    setUser({ username: "", password: "" });
  }

  return (
    <div className="App">{(user.username != "" && user.password != "") ? (
      <MainPage user={user} />
    ) : (
      // added#############################################################################
      <div>
        {/* <LoginPage Login={Login} error={error} /> */}
        <RegisterPage submit={submit} />
      </div>
    )
    }
    </div>
  );
}

export default App;
