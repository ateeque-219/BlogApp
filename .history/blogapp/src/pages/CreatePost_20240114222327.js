import React from 'react';
import 'react-quill/dist/quill.snow.css';
import React
const CreatePost = () => {
  return (
    <form>
        <input type ="title" placeholder='title'/>
        <input type = 'summary' placeholder='summary' />
        <input type = 'file' />
        <ReactQuill />
    </form>
  );
}

export default CreatePost