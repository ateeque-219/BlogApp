import React, { useState } from 'react'
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function login(e){
    e.preventDefault();
    fetch('http://localhost/4000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers : {'Content-Type':'application/json'},
    })
  }
  return (
    <form className="login" onSubmit={login}>
      <h1 className='title'>Login</h1>
      <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}

export default LoginPage