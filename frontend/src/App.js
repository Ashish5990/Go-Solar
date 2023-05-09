// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/main/Home';
import Main from './components/main';

import Signup from './components/main/Signup';
import Login from './components/main/Login';
import Admin from './components/admin';
import AddEquipment from './components/admin/AddEquipment';
import ManageEquipment from './components/admin/ManageEquipment';
import Cart from './components/user/Cart';
import User from './components/user';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<Navigate to="/main/home" />} path='/' />
      <Route path='main' element={<Main />}>
        <Route element={<Home />} path='home' />
        <Route element={<Login />} path='login' />
        <Route element={<Signup />} path='signup' />
      </Route>
      <Route path='user' element={<User />}>
        <Route element={<Cart />} path='cart' />
      </Route>
      <Route path='admin' element={<Admin />}>
        <Route element={<AddEquipment />} path='addequipment' />
        <Route element={<ManageEquipment />} path='manageequipment' />
      </Route>
    </Routes>

  </BrowserRouter>
}

export default App;
