import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import './App.css';
import ItemsListPage from './pages/ItemsListPage.js'
import ItemPage from './pages/ItemPage'
import About from './pages/About'
import Home from './pages/Home'


import Cart from './pages/Cart'
import Login from './components/Login'

const BaseRouter = () => (
    
    <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/Shop' exact element={<ItemsListPage/>}/>
          <Route path='/Item/<:id>' element={<ItemPage />} />
          <Route path="/About/" exact element={<About/>} />
          <Route path="/cart/" exact element={<Cart/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
     </Routes>
     
    );

export default BaseRouter