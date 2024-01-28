import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
const CreatePost = () => {
    const [title,setTitle] useState('');
    const []
  return (
    <form>
        <input type ="title" placeholder='title'/>
        <input type = 'summary' placeholder='summary' />
        <input type = 'file' />
        <ReactQuill />
        <button style={{marginTop :"7.3px" , borderRadius:'10px'}}>Add Post</button>
    </form>
  );
}

export default CreatePost