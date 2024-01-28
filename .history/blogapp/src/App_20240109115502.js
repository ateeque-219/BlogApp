
import { Route, Routes } from 'react-router';
import './App.css';
import Head from "./Head.js"
import Post from "./Post"
import layout from './layout.js';
function App() {
  return (
   <Routes>
    <Route index element={
      <main>
      <Head></Head>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </main>
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
