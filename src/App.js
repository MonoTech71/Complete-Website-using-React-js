import React from 'react'
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Products from './Pages/Products';
import Contact from './Pages/Contact';



import {
  Routes,
  Route
} from "react-router-dom";
import Registration from './Pages/Registration';

const App = (props) => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="services" element={<Services/>}></Route>
        <Route path="products" element={<Products/>}></Route>
        <Route path="contactus" element={<Contact/>}></Route>
        <Route path="signup" element={<Registration/>}></Route>
      </Routes>

    </div>
  )
}

export default App;