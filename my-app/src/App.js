import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TextForm from './components/TextForm';
import BMICal from './components/BMICal';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar Home="Home" About="About" TextForm="TextForm" BMICal="BMI" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/TextForm' element={<TextForm />} />
        <Route path='/BMICal' element={<BMICal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;