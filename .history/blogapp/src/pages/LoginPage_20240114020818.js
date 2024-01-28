// import React, { useContext, useState } from 'react'
// import { Navigate } from 'react-router';
// import { UserContext } from '../UserContext';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [redirect,setredirect] = useState(false);
//   const {setuserinfo} = useContext(UserContext);

//   async function login(e){
//     e.preventDefault();
//    const response = await fetch('http://localhost:4000/login',{
//       method:'POST',
//       body:JSON.stringify({username,password}),
//       headers : {'Content-Type':'application/json'},
//       credentials: 'include',
//     });
//     if(response.ok){
//       response.json().then(userinfo =>{
//         // console.log(userinfo);
//         setuserinfo(userinfo);
//         setredirect(true);
//       });
      
//     }
//     else{
//       alert("wrong credentials");
//     }
//   }
//   if(redirect){
//     return <Navigate to ={'/'}/>
//   }
//   return (
//     <form className="login" onSubmit={(e) => login(e)}>
//       <h1 className='title'>Login</h1>
//       <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button type='submit'>Login</button>
//     </form>
//   );
// }

// export default LoginPage



import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";

export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setuserinfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setuserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Login</button>
    </form>
  );
}