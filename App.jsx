import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./style.css";
function App() {
  return (
    <div>
      <Header classname="header" />
      <Footer classname="footer" />
      <Note classname="note" />
      <Note classname="note" />
      <Note classname="note" />
    </div>
  );
}

export default App;
