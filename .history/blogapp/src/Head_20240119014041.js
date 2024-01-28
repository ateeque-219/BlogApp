import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import { FaMicroblog } from "react-icons/fa6";
import { SlLogin } from "react-icons/sl";
import { IoCreateOutline } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";

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
      <div className='logodiv'>
    <Link to="/" className="logo">Blog-App  
    </Link>
    <FaMicroblog/>
    </div>
  
    <nav>
      {username && (
        <>
        {/* {console.log('3343')} */}
        <div className='loginn'>
        <Link to ="/create" className='loginn'>create</Link>
        <MdCreateNewFolder />
        </div>
        <div></div>
        <a onClick={logout}>logout</a>
        </>
      )}
      {!username && (
        <>
        {/* {console.log('3343')} */}
        <div className='loginn'>
         <Link to="/login"> Login </Link>
         <SlLogin/> 
         </div>
         <div className='loginn'>
       <Link to="/register">Register</Link>
       <IoCreateOutline />
       </div>
        </>
      )}
    </nav>
  </header>
  );
}
export default Head;
