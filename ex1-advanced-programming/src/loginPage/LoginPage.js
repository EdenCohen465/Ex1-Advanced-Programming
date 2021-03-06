import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import usersList from '../UsersList';

function LoginPage({ setConnected_user }) {
    // This effect runs once, after the first render
    useEffect(() => {
      document.title = "Login";
    }, [])
  const navigate = useNavigate();

  // detalis is the user name and password of the user that entered in the login page.
  const [details, setDetails] = useState({ username: "", password: "" });

  // the function hadle the login logic.
  const Login = (details) => {
    // flag for check if the user can connect successfully.
    let flag = false;

    // check if the user already registered.
    if (usersList.has(details.username)) {
      // get information of the user from the user list.
      var d = usersList.get(details.username);
      // check for correct password.
      if (d.password == details.password) {
        // if the password correct, connect the user.
        setConnected_user({ username: details.username, ...d});
        flag = true;
      } else {
        alert("Wrong Password.");
      }
    // else, if the user didnt register.
    } else {
      alert("Please register.");
    }
    return flag;
  }

  // the function habdle the tap on the login button.
  const loginHandler = e => {
    // prevent refresh of the page.
    e.preventDefault();
    // Check if the user can connect, if so, connect him- go to the chatsBar page.
    if (Login(details)) {
      navigate('/chatsbar');
    }
  }

  // return the html og the login page.
  return (
    <form className="Login" onSubmit={loginHandler}>
      <div className="mb-3">
        <h2 className="page-title">Login Page</h2>
        <label className="form-label" htmlFor="Username">Username: </label>
        <input className="form-control" type="text" id="username" name="name" placeholder="Please enter username" required onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
        <label className="form-label" htmlFor="Password: ">Password: </label>
        <input className="form-control" type="password" id="password" placeholder="Please enter your password" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
        <button className="btn btn-outline-secondary" type="submit"> Login </button>
      </div>
      <div>
        <Link to='/registerpage'>tap to register</Link>
      </div>
    </form>
  );
}


export default LoginPage;
