
import { Route, Routes } from 'react-router';
import './App.css';
import Head from "./Head.js"
import Post from "./Post"
import layout from './layout.js';
function App() {
  return (
   <Routes>
    <Route path = "/" element={
      <layout></layout>
    }></Route>
    
      
   </Routes>
        
    
   
   
  );
}

export default App;
