import React from "react";
import "./App.css";
import { TableGenerator } from "./TableGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The spectator events list</h1>
        <TableGenerator />
      </header>
    </div>
  );
}

export default App;
