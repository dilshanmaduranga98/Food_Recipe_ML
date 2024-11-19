import './App.css';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import RecipePage from './pages/RecipePage';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';

function App() {

  return (
    <div className='bg-gradient-to-r from-[#0A0A0A] via-[#1C1C1C] to-[#000000]'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<IndexPage/>}/>
          <Route path='/recipeGenerate' element={<RecipePage/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
