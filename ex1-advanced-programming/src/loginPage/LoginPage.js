
import React, { useState } from "react";
//import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function LoginPage({Login}) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const loginHandler = e => {
    e.preventDefault();
    Login(details);
  }

  return (
    <form className="Login-form" onSubmit={loginHandler}>
      <div className="mb-3">
        <h2 className="page-title">Login Page</h2>
        <label className="form-label" htmlFor="Username">Username: </label>
        <input className="form-control" type="text" id="username" name="name" placeholder="Please enter username" required onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
        <label className="form-label" htmlFor="Password: ">Password: </label>
        <input className="form-control" type="password" id="password" placeholder="Please enter your password" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
        <button className="btn btn-outline-secondary" type="submit"> Login </button>
      </div>
      <div>
        {/* <BrowserRouter>
          <Link to='/RegisterForm'>tap to register</Link>
        </BrowserRouter> */}
      </div>
    </form>
  );
}


export default LoginPage;
