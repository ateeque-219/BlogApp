import React, { useState } from 'react'
const RegisterPage = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
   async function register(event){
    event.preventDefault();
    console.log({username,password});
    try{await fetch('http://localhost:4000/register',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
    })}
    catch(err){
      console.log(err);
    }
  }
  return (
    <form className="register" onSubmit={(e)=>register(e)} >
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
     <button onClick={register}>Register</button>
    </form>
  );
}

export default RegisterPage