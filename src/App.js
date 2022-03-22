import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './Components/NavBar/Nav';
import Asistencia from './Components/Evaluaciones/Evaluaciones';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exact element={<Nav/>} />
          <Route path="/Evaluaciones" exact element={<Asistencia/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
