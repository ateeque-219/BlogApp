import React from 'react'
import '../App.css';
const RegisterPage = () => {
  return (
    <form ClassName="register">
    <input type="text" placeholder='username'/>
    <input type="password" placeholder='password'/>
     <button>Register</button>
    </form>
  );
}

export default RegisterPage