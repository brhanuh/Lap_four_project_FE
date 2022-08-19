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
  ViewEntry,
} from "./pages";
import { default as Layout } from "./layout";
import { AppProvider } from "./HelperContext/Context";
import { Routes, Route } from "react-router-dom";
import CheckIn from "./pages/CheckIn";
import { useState } from "react";

import "./App.css";

import { TimelinePage } from "./pages";

function App() {
  const [updateNav, setUpdateNav] = useState(1);
  return (
    <>
      <AppProvider>

        <Routes>
          <Route path="/" element={<Layout updateNav={updateNav} />}>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/hub" element={<Hub />}></Route>
            <Route path="/check-in" element={<CheckIn />}></Route>
            <Route path="/recommendations" element={<Recommendations />}></Route>
            <Route path="/statistics" element={<Statistics />}></Route>
            <Route path="/timeline" element={<TimelinePage />}></Route>
            <Route path="/timeline/entry" element={<ViewEntry />}></Route>
            <Route path="/recommend" element={<AddRecommendation />}></Route>
            <Route
              path="/logout"
              element={<Logout setUpdateNav={setUpdateNav} />}
            ></Route>
            <Route
              path="/login"
              element={<Login setUpdateNav={setUpdateNav} />}
            ></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
