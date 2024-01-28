
import { Route, Routes } from 'react-router';
import './App.css';
import Head from "./Head.js"
import Post from "./Post"
import layout from './layout.js';
function App() {
  return (
   <Routes>
    <Route path ="/" element={

    } />
    <Route index element={
      <Post></Post>
    } />
      <Route path = '/login' element={
        <main>
        <Head></Head>
        <div>login</div>
      </main>
         
      } />
   </Routes>
        
    
   
   
  );
}

export default App;
