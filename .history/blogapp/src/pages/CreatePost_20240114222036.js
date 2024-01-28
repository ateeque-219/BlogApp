import React from 'react'

const CreatePost = () => {
  return (
    <form>
        <input type ="title" placeholder='title'/>
        <input type = 'summary' placeholder='summary' />
        <input type = 'file' />
        <ReactQuill>
    </form>
  );
}

export default CreatePost