import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar/NavBar.js'
import Footer from './components/Footer/Footer'
import React from 'react'
import BaseRouter from './routes';

function App() {
  
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
