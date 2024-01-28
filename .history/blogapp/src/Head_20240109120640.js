import React from 'react'
import { Link } from 'react-router-dom';
const Head = () => {
  return (
    <div><header>
    <Link href="" className="logo">MyBlog</a>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header></div>
  );
};
export default Head;
