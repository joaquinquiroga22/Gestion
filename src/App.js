import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './Components/NavBar/Nav';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exact element={<Nav/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
