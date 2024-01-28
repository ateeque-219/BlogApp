import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Head = () => {
  const [username,setusername] = useState(null);
  useEffect(async()=>{
    fetch('http://localhost:4000/profile' , {
      credentials:'include',
    }).then(response =>{
      response.json().then(userinfo =>{
         setusername(userinfo.username);
      });
    });
     
  },[]);
  return (
    <div><header>
    <Link to="/" className="logo">MyBlog</Link>
    <nav>
      {username && (
        <>
        <Link to="/create">create new post
        </>
      )}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header></div>
  );
}
export default Head;
