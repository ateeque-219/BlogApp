import React from 'react'
 import '../App.css';
const LoginPage = () => {
  return (
    <form ClassName="login">
    <input type="text" placeholder='username'/>
    <input type="password" placeholder='password'/>
     <button>Login</button>
    </form>
  );
}

export default LoginPage