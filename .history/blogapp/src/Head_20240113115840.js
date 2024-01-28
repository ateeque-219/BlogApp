import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const Head = () => {
  useEffect(async()=>{
   const response = await fetch('http://localhost:4000/profile' , {
      credentials:'include',
    })
    if(response)
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