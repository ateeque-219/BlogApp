import React from 'react'

export default function Post({title,summary,cover,content}) {
  return (
    <div>
         <div className="post">
        <div className="image">
        <img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VifGVufDB8fDB8fHww" alt=""/> 
        </div>
        <div className="texts">
        <h2>{title}</h2>
         <p className="info">
         <a href="" className="author">ateeque </a>
         <time>23-01-24 18:23</time>
         </p>
        <p className="summary">
        {summary}
        </p>
        </div>
      </div>
      
     
    </div>
  )
}
