import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar title="StriveBooks" />
      <Home jumboTitle="Welcome to strivebooks" />
    </div>
  );
}

export default App;
