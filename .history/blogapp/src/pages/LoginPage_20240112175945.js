import React, { useState } from 'react'
const LoginPage = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  return (
    <form className="login">
        <h1 className='title'>Login</h1>
    <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <input type="password" placeholder='password' value={password} onChange={(e)=>}/>
     <button>Login</button>
    </form>
  );
}

export default LoginPage