import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import MainPage from "./pages/main";
import Persons from "./pages/persons";
import Starships from "./pages/starships";
import Planets from "./pages/planets";
import ItemPage from "./pages/item-page";
import NotFound from "./pages/not-found-page";

import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/persons/" element={<Persons />} />
          <Route path="/persons/:id" element={<ItemPage type="Person" />} />

          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:id" element={<ItemPage type="Starship" />} />

          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:id" element={<ItemPage type="Planet" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
