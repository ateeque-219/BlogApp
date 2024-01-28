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
      response.json().then(userinfo =>{
          // setusername(userinfo.username);
          setuserinfo(userinfo);
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



  return (
    <div><header>
    <Link to="/" className="logo">MyBlog</Link>
    <nav>
      {info.userinfo && (
        <>
        <Link to ="create">create</Link>
        <a onClick={logout}>logout</a>
        </>
      )}
      {!info.userinfo && (
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
