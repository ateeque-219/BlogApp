import React, { useState } from 'react'
const LoginPage = () => {
  const [username,serUsername] = useState('');
  const [user]
  return (
    <form className="login">
        <h1 className='title'>Login</h1>
    <input type="text" placeholder='username'/>
    <input type="password" placeholder='password'/>
     <button>Login</button>
    </form>
  );
}

export default LoginPage