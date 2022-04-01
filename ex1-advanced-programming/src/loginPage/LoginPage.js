
import React, { useState } from "react";

function LoginPage({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const loginHandler = e => {
    e.preventDefault();
    Login(details);
  }

  return (
    <form onSubmit={loginHandler}>
      <div className="form-inner">
        <h2>Login Form</h2>
        { (error!="") ? (<div className="error">{error}</div>) : "" }
        <p>Username:</p>
        <input type="text" id="name" name="name" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
      </div>
      <div>
        <p>Password:</p>
        <input type="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
      </div>
      <div>
        <input type="submit" value="LOGIN"/>
      </div>
    </form>
  );
}


export default LoginPage;
