import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contacts from './components/contacts';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contacts/>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
