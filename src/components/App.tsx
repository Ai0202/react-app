import React from 'react';
import { ResetStyle } from "./styles/reset";
import { Header } from "./organisms/Header";
import { MainVisual } from "./organisms/MainVisual";

function App() {
  return (
    <div>
      <ResetStyle />
      <Header />
      <MainVisual />
    </div>
  );
}

export default App;
