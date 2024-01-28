import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const PostPage = () => {
    const [postInfo,setPostInfo] = useState(null);
    //const {userInfo} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
      fetch(`http://localhost:4000/post/${id}`)
        .then(response => {
          response.json().then(postInfo => {
            setPostInfo(postInfo);
          });
        });
    }, []);
  
    if (!postInfo) return '';
  return (
    <div>PostPage</div>
  )
}

export default PostPage