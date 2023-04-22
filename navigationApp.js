import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import Home from './components/Home';

function App() {
  return (
    <Router>
          <div className="App">
            <Navbar/>
            <div className="content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/create" element={<Create/>} />
                <Route path="/blogs/:id" element={<BlogDetails/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            </div>
        </div>
    </Router>
    
  );
}

export default App;
