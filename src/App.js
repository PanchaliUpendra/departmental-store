import React, { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Errorpage from './Components/Errorpage/Errorpage';
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import Mycontext from './Mycontext';
import Addproducts from './Components/Addproducts/Addproducts';
import Profile from './Components/Profile/Profile';
import Products from './Components/Products/Products';

function App() {
  
  const sharedvalue = useContext(Mycontext);

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        {sharedvalue.isauthed.islogged ?<></>:<Route path='/login' element={<Login/>}/> }
        {sharedvalue.isauthed.islogged ?<></>:<Route path='/Register' element={<Register/>}/> }
        {sharedvalue.isauthed.islogged ?<Route path='/profile' element={<Profile/>}/>:<></> }
        {sharedvalue.isauthed.islogged &&  sharedvalue.isauthed.isAdmin &&  <Route path='/addproducts' element={<Addproducts/>}/>}
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Errorpage/>}/>
        
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
