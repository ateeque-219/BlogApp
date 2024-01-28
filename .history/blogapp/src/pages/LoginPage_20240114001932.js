import React, { useState } from 'react'
import { Navigate } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const ctx = useContext()
  const [password, setPassword] = useState('');
  const [redirect,setredirect] = useState(false);
  async function login(e){
    e.preventDefault();
   const response = await fetch('http://localhost:4000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers : {'Content-Type':'application/json'},
      credentials: 'include',
    });
    console.log(response.ok);
    if(response.ok === true){
      setredirect(true);
    }
    else{
      alert("wrong credentials");
    }
  }
  if(redirect){
    return <Navigate to ={'/'}/>
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