import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import {Routes,Route } from 'react-router-dom';
import TextForm from './components/TextForm';
import BMICal from './components/BMICal';
import Home from './components/Home';
function App() {
  return (
    <>
    <Navbar Home="Home" About="About" TextForm="TextForm" BMICal="BMI"></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/TextForm' element={<TextForm/>}></Route>
      <Route path='/BMICal' element={<BMICal/>}></Route>
    </Routes>
    </>
  );
}

export default App;
