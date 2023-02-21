import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

function App() {
  return (
        <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar/>} />
        </Routes>
      </Router>

      </>
  );
}

export default App;
