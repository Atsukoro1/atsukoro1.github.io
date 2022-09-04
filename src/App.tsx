import ProgressLine from "./components/ProgressLine";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="fixed top-0">
        <ProgressLine/>
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default App;
