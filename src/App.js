import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import ShoppingCartContainer from './components/shoppingCartContainer/shoppingCartContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ShoppingCartContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
