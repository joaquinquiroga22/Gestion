import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './Components/NavBar/Nav';
import Asistencia from './Components/Asistencia/Asistencia';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exact element={<Nav/>} />
          <Route path="/Asistencia" exact element={<Asistencia/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
