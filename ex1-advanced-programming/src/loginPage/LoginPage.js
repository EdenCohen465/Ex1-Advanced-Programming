
import React, {useState} from "react";


function LoginPage({Login, error }) {
  const[details, setDetails] = useState({name:"", password:""});

  const loginHandler = e => {
    e.preventDefault();
    Login(details);
  }


  return (
    <form onSubmit={loginHandler}>
      <div>
        
        <p>Username</p>
        <input type="text" id="name" name= "name" onChange={e=>setDetails({...details, name:e.target.value})} value={details.name} />
      </div>
      <div>
        <p>Password</p>
        <input type="password"  onChange={e=>setDetails({...details, password:e.target.value})} value={details.password}/>
      </div>
      <div>
        <button type="login" >login</button>
      </div>
    </form>
  );
}


export default LoginPage;
