import React, { useState } from 'react'
import { Navigate } from 'react-router';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect,setredirect] = useState(false);
  function login(e){
    e.preventDefault();
   const response =  fetch('http://localhost:4000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers : {'Content-Type':'application/json'},
      credentials: 'include',
    })
    if(response.ok){
      setredirect(true);
    }

  }
  if(redirect){
    return <Navigate to="Post"></Navigate>
  }
  return (
    <form className="login" onSubmit={(e) => login(e)}>
      <h1 className='title'>Login</h1>
      <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Login</button>
    </form>
  );
}

export default LoginPage