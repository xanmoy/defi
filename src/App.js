

import './App.css';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Services from './components/Services';

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import TransactionPage from './components/TransactionPage';
import AboutUs from './components/AboutUs';
import SignUp from './details/SignUp';
import SignIn from './details/SIgnIn';


function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route path='/service' element={<Services/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='transaction' element={<TransactionPage/>}/>

    <Route path='/signup' element={<SignUp/>} />
    <Route path='/signin' element={<SignIn/>} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
