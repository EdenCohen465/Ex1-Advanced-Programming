import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import usersList from '../UsersList';

function LoginPage({ setUser }) {
  const navigate = useNavigate();
  // detalis is the user name and paasword that entered in the login page.
  const [details, setDetails] = useState({ username: "", password: "" });

  const Login = (details) => {
    let isIn = false;
    let flag = false;
    usersList.map((d) => {
      if (d.username == details.username) {
        isIn = true;
        if (d.password == details.password) {
          setUser(d);
          flag = true;
        }
        else {
          alert("Wrong Password");
        }
      }
    });
    if (!isIn) {
      alert("please register");
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
