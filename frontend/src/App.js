import { BrowserRouter as Router,
  Routes,
  Route}
  from 'react-router-dom'
import Header from './components/Header.js'
import './App.css';
import ItemsListPage from './pages/ItemsListPage.js'
import ItemPage from './pages/ItemPage'


function App() {
  return (
    <Router>
      
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<ItemsListPage/>}/>
          <Route path='/Item/:id' element={<ItemPage />} />
        </Routes>
        my app
      </div>
    </Router>
  );
}

export default App;
