
import { Route, Routes } from 'react-router';
import './App.css';
import Head from "./Head.js"
import Post from "./Post"
function App() {
  return (
   <Routes>
    <Route>
      <main>
         <Head></Head>
         <Post></Post>
         <Post></Post>
         <Post></Post>
       </main>
   </Routes>
        
    
   
   
  );
}

export default App;
