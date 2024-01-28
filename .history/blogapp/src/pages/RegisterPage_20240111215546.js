import React, { useState } from 'react'
const RegisterPage = () => {
  const  = useState("");
  return (
    <form className="register">
        <h1 className='title'>Register</h1>
    <input type="text" placeholder='username'/>
    <input type="password" placeholder='password'/>
     <button>Register</button>
    </form>
  );
}

export default RegisterPage