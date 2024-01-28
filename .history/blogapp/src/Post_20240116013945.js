import React from 'react'
import { Link } from 'react-router-dom'
export default function Post({title,summary,cover,content, createdat ,author}) {
  return (
    <div>
         <div className="post">
        <div className="image">
          <Link>

          </Link>
        
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
