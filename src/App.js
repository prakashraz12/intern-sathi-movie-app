import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movie/:id' element={<SingleMovie/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
