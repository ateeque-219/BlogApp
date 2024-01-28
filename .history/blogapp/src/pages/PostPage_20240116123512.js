import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const PostPage = () => {
    const {id} = useParams();
    useEffect({
        fetch(`http://localhost:4000/post/${id}`).then
    },[]);
  return (
    <div>PostPage</div>
  )
}

export default PostPage