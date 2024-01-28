import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { FaMicroblog } from "react-icons/fa6";

const Head = () => {
  // const ctx = useContext(UserContext);
  // const [userinfo,setuserinfo] = useState(ctx);
  const {setuserinfo , userinfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
      .then(response => {
         return response.json();
      })
      .then(profileInfo => {
        console.log(profileInfo)
        setuserinfo(profileInfo);
      })
      .catch(error => {
        throw(error);
      }); 
  }, []);


function logout(){
   fetch('http://localhost:4000/logout',{
    credentials : 'include' ,
    method:'POST',
  });
  setuserinfo(null);
}

const username = userinfo?.username;

// console.log('dasda',userinfo?.username);
  return (
    <header>
      <div></div>
    <Link to="/" className="logo">Blog-App  <FaMicroblog/>
    
    </Link>

  
    <nav>
      {username && (
        <>
        {/* {console.log('3343')} */}
        <Link to ="/create">create</Link>
        <a onClick={logout}>logout</a>
        </>
      )}
      {!username && (
        <>
        {/* {console.log('3343')} */}
         <Link to="/login">Login</Link>
       <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  </header>
  );
}
export default Head;
