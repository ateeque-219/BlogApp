 import React, { useEffect } from 'react'
 import Post from "../Post"
 const Indexpage = () => {
  
   useEffect(()=>{
    fetch('http://localhost:4000/post').then(response =>{
      response.json().then(posts =>{
        //console.log(posts);
      })
    })
  })
   return (
     <div>
        <Post/>
        <Post/>
        <Post/>
     </div>
   )
 }
 
 export default Indexpage