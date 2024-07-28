import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AddNewPerson from './components/newperson/AddNewPerson';
import Retrieve from './components/Retrieve/Retrieve';

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddNewPerson />} />
          <Route path="/Retrieve" element={<Retrieve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
