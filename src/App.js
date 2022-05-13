import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";



function App () {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/Sobre" element={<Sobre/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App

