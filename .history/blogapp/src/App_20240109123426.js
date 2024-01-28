
import { Route, Routes } from 'react-router';
import './App.css';
import Post from "./Post"
import Layoutt from './Layoutt';
import Indexpage from './pages/Indexpage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layoutt />}>
        <Route index element={<I />} />
        <Route path='/login' element={<div>login page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
