import React from 'react'
import { Home, Login, Landing, Register, Contacts, Hub, About, Statistics, Recommendations } from "./pages"
import { default as Layout } from "./layout"
import { Routes, Route } from 'react-router-dom'

import './App.css';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/about" element={<About />}></Route>
           <Route path="/hub" element={<Hub />}></Route>
          <Route path="/recommendations" element={<Recommendations/>}></Route>
          <Route path="/statistics" element={<Statistics/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
