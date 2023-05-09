// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/main/Home';
import Main from './components/main';

import Signup from './components/main/Signup';
import Login from './components/main/Login';
import Admin from './components/admin';
import AddEquipment from './components/admin/AddEquipment';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<Navigate to="/main/home" />} path='/' />
      <Route path='main' element={<Main />}>
        <Route element={<Home />} path='home' />
        <Route element={<Login />} path='login' />
        <Route element={<Signup />} path='signup' />
      </Route>
      <Route path='admin' element={<Admin />}>
        <Route element={<AddEquipment />} path='addequipment' />
      </Route>
    </Routes>

  </BrowserRouter>
}

export default App;
