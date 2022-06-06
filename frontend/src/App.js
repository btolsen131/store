import { BrowserRouter as Router,
  Routes,
  Route}
  from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import ItemsListPage from './pages/ItemsListPage.js'
import ItemPage from './pages/ItemPage'
import NavBar from './components/Navbar/NavBar.js'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import React from 'react'
import Cart from './pages/Cart'
import BaseRouter from './routes';

function App() {
  const [cart, setCart] = useState({});

  // const fetchCart = async () => {
  //   const response = await commerce.cart.retrieve()
  // }

  return (
    <Router>
      
      <div className="AppMain">
        <NavBar />
        <div className='container mt-3'>
       <BaseRouter />
        </div>  
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
