import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Head = () => {
  //const [username,setusername] = useState(null);
  useEffect(async()=>{
    fetch('http://localhost:4000/profile' , {
      credentials:'include',
    })
  },[]);
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
