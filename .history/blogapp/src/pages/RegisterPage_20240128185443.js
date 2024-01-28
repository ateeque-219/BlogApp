import React, { useState } from 'react'

const RegisterPage = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
   async function register(event){
    event.preventDefault();
    // console.log({username,password});
   const response = await fetch('http://localhost:4000/register',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
    });
     //console.log(response);
     string ress = 'username length is too short';
    if(!response.ok){
      alert("registeration failed");
    }
    else if(response.message == 'username too short')
    else alert("successfull registeration")
  }
  return (
    <form className="register" onSubmit={register} >
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
     <button type='submit'>Register</button>
    </form>
  );
}


export default RegisterPage