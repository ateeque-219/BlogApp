import React from 'react'
export default function Post({title,summary,cover,content, createdat ,author}) {
  return (
    <div>
         <div className="post">
        <div className="image">
        <img src= alt=""/> 
        </div>
        <div className="texts">
        <h2>{title}</h2>
         <p className="info">
         <a href="" className="author">{author.username} </a>
         <time>12-09-2024 </time>
         </p>
        <p className="summary">
        {summary}
        </p>
        </div>
      </div>
      
     
    </div>
  )
}
