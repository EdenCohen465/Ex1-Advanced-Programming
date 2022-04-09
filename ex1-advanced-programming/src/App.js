import LoginPage from './loginPage/LoginPage';
import React, { useState, useRef } from 'react';
import ChatsBar from './chatsBar/ChatsBar';
import usersList from './UsersList';
import './App.css';
import RegisterPage from './registerPage/RegisterPage';
import Chat from './chat/Chat';
import sunset from './userPhotos/sunset.jpg'


var photo = null;

const photoHandler = (e) => {
   photo = e.target.files[0];
}

function checkValidPassword(password) {
  var numbers = false;
  var letters = false;
  for (var i = 0; i < password.length; i++) {
    if (Number.isInteger(parseInt(password.charAt(i)))) {
      numbers = true;
    }
    if (/^[a-zA-Z]+$/.test(password.charAt(i))) {
      letters = true;
    }
  }
  if (!numbers || !letters) {
    return false;
  }
  return true;
}

function App() {

  const [user, setUser] = useState({ nickname: "", photo: ""});

  const Login = function (details) {
    let isIn = false;
    usersList.map((d) => {
      if (d.username == details.username) {
        isIn = true;
        if (d.password == details.password) {
          setUser({
            nickname: d.nickname,
            photo: d.photo,
            public_photo: d.public_photo
          });
        }
        else {
          alert("Wrong Password");
        }
        return;
      }
    });
    if (!isIn) {
      alert("please register");
    }
  }

  const submit = _ => {
    //getting the values of all inputs.
    const user_name = document.getElementById('username').value;
    const nick_name = document.getElementById('nickname').value;
    const photo_ = document.getElementById('formFileSm').value;
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

    if (!checkValidPassword(password_)) {
      alert("Password must contain numbers and letters. Try again!");
      return;
    }
    
    // check with numbers and letters
    usersList.push({
      username: user_name,
      nickname: nick_name,
      photo: photo,
      password: password_
    });

    setUser({
      nickname: nick_name,
      photo: photo,
      public_photo: ""
    });
  }

  const Logout = () => {
    setUser({ nickname: "", photo: "" });
  }

  const message1 = {
    time: "10:00",
    m: "HEEEEY"
  }
  const message2 = {
    time: "12:00",
    m: "whats up"
  }
  const message3 = {
    time: "13:00",
    m: "thanks"
  }
  const friend1 = {nickname:"Eden", messagesHistory:[message1, message2,message3], picture: sunset}

  return (
    <div className="App">{(user.nickname != "" && user.photo != "") ? (
      <Chat friend={friend1} />

    ) : (
      // added#############################################################################
      <div>
        <LoginPage Login={Login} />
        {/* <RegisterPage submit={submit} photoHandler={photoHandler}/> */}
      </div>
    )
    }
    </div>
  );
}

export default App;