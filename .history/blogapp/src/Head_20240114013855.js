import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
const Head = () => {
   //const [username,setusername] = useState(null);
  const ctx = useContext(UserContext);
  const [userinfo,setuserinfo] = useState(ctx);
  // useEffect(()=>{
  //   fetch('http://localhost:4000/profile' , {
  //     credentials:'include',
  //   }).then(response =>{
  //     if(!response.ok){
  //       throw new Error('Network response was not ok');
  //     }
      
  //     response.json().then(userinfor =>{
  //         // setusername(userinfo.username);
  //         setuserinfo(userinfor);
  //     });
  //   });
  // } , []);
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
  setuserinfo({});
}

const username = userinfo?.username;
console.log('dasda',userinfo?.username);
  return (
    <div><header>
    <Link to="/" className="logo">MyBlog</Link>
    <nav>
      {userinfo?.username && (
        <>
        {console.log('3343')}
        <Link to ="create">create</Link>
        <a onClick={logout}>logout</a>
        </>
      )}
      {!userinfo?.username && (
        <>
        {console.log('3343')}
         <Link to="/login">Login</Link>
       <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  </header></div>
  );
}
export default Head;
