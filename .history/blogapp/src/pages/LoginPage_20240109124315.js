import React from 'react'
import { Form } from 'react-router-dom';
const LoginPage = () => {
  return (
    <form ClassName="">
     <input type="text" placeholder='username'>username</input>
     <input type="password" placeholder='password'>password</input>
     <button>Login</button>
    </Form>
  );
}

export default LoginPage