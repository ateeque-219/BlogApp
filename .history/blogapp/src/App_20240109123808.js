
import { Route, Routes } from 'react-router';
import './App.css';
import Layoutt from './Layoutt';
import Indexpage from './pages/Indexpage';
import L
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layoutt />}>
        <Route index element={<Indexpage />} />
        <Route path='/login' element={<div>login page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
