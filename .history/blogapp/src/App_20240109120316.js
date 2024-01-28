
import { Route, Routes } from 'react-router';
import './App.css';
import Post from "./Post"
import Layout from './layout';
function App() {
  return (
   <Routes>
    <Route path = "/" element={<layout/>}>
      <Route index element={<Post/>} />
      <Route path = '/login' element={<div>login page</div>} />
    </Route>
   </Routes>
        
    
   
   
  );
}

export default App;
