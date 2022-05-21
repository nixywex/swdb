import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import MainPage from "./pages/main";
import Persons from "./pages/persons";
import Starships from "./pages/starships";
import Planets from "./pages/planets";

import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/persons" element={<Persons />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
