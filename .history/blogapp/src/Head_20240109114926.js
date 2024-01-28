import React from 'react'
import { Link } from 'react-router-dom';
const Head = () => {
  return (
    <div><header>
    <a href="" className="logo">MyBlog</a>
    <nav>
      <Link to="/login">Login</Link>
      <a href="">Register</a>
    </nav>
  </header></div>
  );
};
export default Head;
