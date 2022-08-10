import React from "react";
import {
  Home,
  Login,
  Landing,
  Register,
  Contacts,
  Hub,
  About,
  Statistics,
  Recommendations,
  AddRecommendation,
  Logout,
} from "./pages";
import { default as Layout } from "./layout";
import { Routes, Route } from "react-router-dom";
import CheckIn from "./pages/CheckIn";
import { useState } from "react";

import "./App.css";

import { TimelinePage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/hub" element={<Hub />}></Route>
          <Route path="/check-in" element={<CheckIn />}></Route>
          <Route path="/recommendations" element={<Recommendations />}></Route>
          <Route path="/statistics" element={<Statistics />}></Route>
          <Route path="/timeline" element={<TimelinePage />}></Route>
          <Route path="/recommend" element={<AddRecommendation />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
