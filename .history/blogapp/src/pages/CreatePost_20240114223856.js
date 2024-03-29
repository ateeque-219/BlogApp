import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";


const  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
 const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];


const CreatePost = () => {
    const [title,setTitle] = useState('');
    const [summary , setSummary] = useState('');
    const [content , setContent] = useState('');


      
  return (
    <form>
        <input type ="title" placeholder='title' value={title} onChange={e=>(setTitle(e.target.value))}/>
        <input type = 'summary' placeholder='summary' value={summary} onChange={e=>(setSummary(e.target.value))} />
        <input type = 'file' />
        <ReactQuill value={content} modules={modules} formats={formats}/>
        <button style={{marginTop :"7.3px" , borderRadius:'10px'}}>Add Post</button>
    </form>
  );
}

export default CreatePost