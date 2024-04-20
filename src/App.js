

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';

import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
     
   

     <BrowserRouter>
     <Navbar/>
     <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route path='/service' element={<Services/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
