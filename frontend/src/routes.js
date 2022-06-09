import React from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';
import ItemsListPage from './pages/ItemsListPage.js'
import ItemPage from './pages/ItemPage'
import About from './pages/About'
import Home from './pages/Home'


import Cart from './pages/Cart'


const BaseRouter = () => (
    
    <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/Shop' exact element={<ItemsListPage/>}/>
          <Route path='/Item/:id' element={<ItemPage />} />
          <Route path="/About/" exact element={<About/>} />
            
            <Route path="/Cart/">
              <Route index element={<Cart/>} />
              <Route path=":id?" element={<Cart />} />
            </Route>
          
     </Routes>
     
    );

export default BaseRouter