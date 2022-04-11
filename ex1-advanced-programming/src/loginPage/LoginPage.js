import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import usersList from '../UsersList';

function LoginPage({ connected_user, setConnected_user }) {
  const navigate = useNavigate();
  // detalis is the user name and paasword that entered in the login page.
  const [details, setDetails] = useState({ username: "", password: "" });

  const Login = (details) => {
    let flag = false;
    if (usersList.has(details.username)) {
      var d = usersList.get(details.username);
      if (d.password == details.password) {
        setConnected_user({ username: details.username, ...d});
        flag = true;
      } else {
        alert("Wrong Password.");
      }
    } else {
      alert("Please register.");
    }
    return flag;
  }

  const loginHandler = e => {
    e.preventDefault();
    if (Login(details)) {
      navigate('/chatsbar');
    }
  }

  return (
    <form className="LoginOrRegister" onSubmit={loginHandler}>
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
