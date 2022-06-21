import React from "react";
import { Route, Routes} from "react-router-dom";
import './App.css';
import ItemsListPage from './pages/ItemsListPage.js'
import ItemPage from './pages/ItemPage'
import About from './pages/About'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";


const BaseRouter = () => (

    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path='/Shop' exact element={<ItemsListPage/>}/>
        <Route path='/Item/:id' element={<ItemPage />} />
        <Route path="/About/" exact element={<About/>} />
        <Route path='/Login/' element={<Login/>} />
        <Route path='/Register/' element={<Register/>} />
        <Route path='/Profile/' element={<Profile/>} />
        <Route path='/Shipping/' element={<Shipping/>} />
        <Route path='/Payment/' element={<Payment/>} />
        <Route path= "/Cart" element={<Cart/>} />
        <Route path="/Cart/:id" element={<Cart />} />
                
            
          
     </Routes>
    
)
            ;

export default BaseRouter