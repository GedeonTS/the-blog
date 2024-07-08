import './App.css';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  return (
    <Routes>
    <Route exact path='/' element={ <Homepage/>} />
    <Route exact path='/' element={ <Blog/>} />
    </Routes>
  )
}

export default App
