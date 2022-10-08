import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ImagesGroup from "./components/ImageGroup";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ImagesGroup />
        <Content />
      </div>
    </div>
  );
}

export default App;
