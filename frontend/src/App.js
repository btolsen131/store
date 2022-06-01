import { BrowserRouter as Router,
  Routes,
  Route}
  from 'react-router-dom'
import './App.css';
import ItemsListPage from './pages/ItemsListPage.js'
import ItemPage from './pages/ItemPage'
import NavBar from './components/Navbar/NavBar.js'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import React from 'react'

function App() {
  return (
    <Router>
      
      <div className="AppMain">
        <NavBar />
        <div className='container mt-3'>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/Shop' exact element={<ItemsListPage/>}/>
          <Route path='/Item/:id' element={<ItemPage />} />
          <Route path="/About/" exact element={<About/>} />
        </Routes>
        </div>  
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
