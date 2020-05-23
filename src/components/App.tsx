import React from 'react';
import { ResetStyle } from "./styles/reset";
import { Header } from "./organisms/Header";
import { MainVisual } from "./organisms/MainVisual";
import { Concept } from "./organisms/Concept";

function App() {
  return (
    <div>
      <ResetStyle />
      <Header />
      <MainVisual />
      <Concept />
    </div>
  );
}

export default App;
