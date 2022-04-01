
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function LoginPage({Login}) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const loginHandler = e => {
    e.preventDefault();
    Login(details);
  }

  return (
    <form onSubmit={loginHandler}>
      <div className="form-inner">
        <h2>Login Form</h2>
        <p>Username:</p>
        <input type="text" id="name" name="name" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
      </div>
      <div>
        <p>Password:</p>
        <input type="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
      </div>
      <div>
        <input type="submit" value="LOGIN" />
        {/* <BrowserRouter>
          <Link to='/RegisterForm'>tap to register</Link>
        </BrowserRouter> */}
      </div>
    </form>
  );
}


export default LoginPage;
