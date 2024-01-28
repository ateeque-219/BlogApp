
import { Route, Routes } from 'react-router';
import './App.css';
import Layoutt from './Layoutt';
import Indexpage from './pages/Indexpage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layoutt />}>
        <Route index element={<Indexpage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path ="/register" element={<RegisterPage/>}/>
        <Route path ="/create" element={<CreatePost />}></Route>
        <Route path ="/post/id" element={}
      </Route>
    </Routes>
    </UserContextProvider>
    
  );
}

export default App;
