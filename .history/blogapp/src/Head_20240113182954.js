import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
const Head = () => {
  // const [username,setusername] = useState(null);
  const {setuserinfo,userinfo}= useContext(UserContext)
  useEffect(()=>{
    
    fetch('http://localhost:4000/profile' , {
      credentials:'include',
    }).then(response =>{
      response.json().then(userinfor =>{
          // setusername(userinfo.username);
          setuserinfo(userinfor);
      });
    });
  } , []);


function logout(){
   fetch('http://localhost:4000/logout',{
    credentials : 'include' ,
    method:'POST',
  });
  setuserinfo(null);
}

const username = userinfo?.username;

  return (
    <div><header>
    <Link to="/" className="logo">MyBlog</Link>
    <nav>
      {username && (
        <>
        <Link to ="create">create</Link>
        <a onClick={logout}>logout</a>
        </>
      )}
      {!username && (
        <>
         <Link to="/login">Login</Link>
       <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  </header></div>
  );
}
export default Head;
