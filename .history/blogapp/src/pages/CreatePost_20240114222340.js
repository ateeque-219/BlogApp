import React from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from reac-ReactQuill;
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