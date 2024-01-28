 import React, { useEffect } from 'react'
 import Post from "../Post"
 const Indexpage = () => {
  use useEffect(()=>{
    fetch('/Post').then()
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