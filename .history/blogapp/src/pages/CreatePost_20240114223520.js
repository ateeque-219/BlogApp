import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
const CreatePost = () => {
    const [title,setTitle] = useState('');
    const [summary , setSummary] = useState('');
    const [content , setContent] = useState('');


   const  modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      },
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    };
  return (
    <form>
        <input type ="title" placeholder='title'/>
        <input type = 'summary' placeholder='summary' />
        <input type = 'file' />
        <ReactQuill value={content} modules={modules}/>
        <button style={{marginTop :"7.3px" , borderRadius:'10px'}}>Add Post</button>
    </form>
  );
}

export default CreatePost