 import React, { useEffect } from 'react'
 import Post from "../Post"
 const Indexpage = () => {
   useEffect(()=>{
    fetch('/Post').then(response =>{
      response.json().then()
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