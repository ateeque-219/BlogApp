 import React, { useEffect } from 'react'
 import Post from "../Post"
 const Indexpage = () => {
  use useEffect(()=>{
    fetch('/Post')
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