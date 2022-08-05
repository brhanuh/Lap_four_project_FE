import React, { useLayoutEffect } from 'react'
import {Home, Login, Landing} from "./pages"
import {default as Layout} from "./layout"
import {Routes, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="/" element={<Landing />}></Route>
           <Route path="/login" element={<Login />}></Route>
        </Route>
    </Routes>
    </>
  );
}

export default App;
