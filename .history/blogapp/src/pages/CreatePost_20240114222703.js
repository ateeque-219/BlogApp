import React from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
const CreatePost = () => {
  return (
    <form>
        <input type ="title" placeholder='title'/>
        <input type = 'summary' placeholder='summary' />
        <input type = 'file' />
        <ReactQuill />
        <button style={margin-top =5px}>Add Post</button>
    </form>
  );
}

export default CreatePost