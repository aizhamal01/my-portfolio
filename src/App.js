import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
            <h1 className="h1_content">Aizhamal</h1>
            <h2 className="h2_content">Brings ideas to life with code</h2>
            <p className="p_content">As a Frontend Developer.</p>
            <div className="main_photo"></div>
        </div>

      <Outlet />
    </div>
    
  );
}

export default App;
