import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const Head = () => {
  const [username,setusername] = 
  useEffect(async()=>{
    fetch('http://localhost:4000/profile' , {
      credentials:'include',
    }).then(response =>(){
      response.json().then(userinfo =>{

      })
    })
     
  });
  return (
    <div><header>
    <Link to="/" className="logo">MyBlog</Link>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header></div>
  );
}
export default Head;
