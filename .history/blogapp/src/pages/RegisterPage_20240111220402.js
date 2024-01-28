import React, { useState } from 'react'
const RegisterPage = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  function register(event){
    event.preventDefault();
  }
  return (
    <form className="register" onSubmit={register}>
        <h1 className='title'>Register</h1>
    <input
     type="text" 
     placeholder='username'
     value={username}
     onChange={(e)=>(setUsername(e.target.value))}
     />
    <input type="password" placeholder='password'
    value={password}
    onChange={(e) =>(setPassword(e.target.value))}
    />
     <button>Register</button>
    </form>
  );
}

export default RegisterPage