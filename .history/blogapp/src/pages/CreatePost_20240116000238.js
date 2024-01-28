import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import { Navigate } from 'react-router';


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
    const [files,setFiles] = useState('');
    const [redirect,setredirect] = useState(false);


      async function createNewPost(e){
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('files' , files[0]);
       // console.log(files);
         const response = await  fetch('http://localhost:4000/post',{
            method : "POST",
            body : data,
            credentials:'include'
        });
      // console.log(await response.json());
      if(response.ok){
        setredirect(true);
      }
      }

  if(redirect){
    return <Navigate to ="/"></Navigate>
  }
  return (
    <form onSubmit={createNewPost}>
        <input type ="title" placeholder='title' value={title} onChange={e=>(setTitle(e.target.value))}/>
        <input type = 'summary' placeholder='summary' value={summary} onChange={e=>(setSummary(e.target.value))} />
        <input type = 'file'  onChange={e=>(setFiles(e.target.files))} />
        <ReactQuill value={content} onChange={newValue=>(setContent(newValue))} modules={modules} formats={formats}/>
        <button style={{marginTop :"7.3px" , borderRadius:'10px'}}>Add Post</button>
    </form>
  );
}

export default CreatePost