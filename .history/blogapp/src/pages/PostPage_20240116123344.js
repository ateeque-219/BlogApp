import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const PostPage = () => {
    const {id} = useParams;
    useEffect({
        fetch(`http://`)
    },[]);
  return (
    <div>PostPage</div>
  )
}

export default PostPage