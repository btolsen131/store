import { BrowserRouter as Router,
  Routes,
  Route}
  from 'react-router-dom'
import './App.css';
import ItemsListPage from './pages/ItemsListPage.js'
import ItemPage from './pages/ItemPage'
import NavBar from './components/Navbar/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      
      <div className="App">
        
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/Shop' exact element={<ItemsListPage/>}/>
          <Route path='/Item/:id' element={<ItemPage />} />
          <Route path="/About/" exact element={<About/>} />
        </Routes>
        my app
      </div>
    </Router>
  );
}

export default App;
