import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.js';
import Projects from './Containers/Projects/Projects.jsx';
import Stack from './Containers/Stack/Stack.jsx';
import Contacts from './Containers/Contacts/Contacts.jsx';



import './index.css';

ReactDOM.render(
  <BrowserRouter>
   <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="projects" element={<Projects/>}/>
        <Route path="stack" element={<Stack/>} />
        <Route path="contacts" element={<Contacts/>} />


        <Route path="*" element={<div>NOT FOUND</div>  } />

</Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

