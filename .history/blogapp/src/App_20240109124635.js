
import { Route, Routes } from 'react-router';
import './App.css';
import Layoutt from './Layoutt';
import Indexpage from './pages/Indexpage';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layoutt />}>
        <Route index element={<Indexpage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path ="/register" element={<RegisterPage/>}
      </Route>
    </Routes>
  );
}

export default App;
