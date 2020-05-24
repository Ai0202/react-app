import React from 'react';
import { Header } from "../../organisms/Header";
import { MainVisual } from "../../organisms/MainVisual";
import { Concept } from "../../organisms/Concept";

export const Home = () => {
  return (
    <div>
      <Header />
      <MainVisual />
      <Concept />
    </div>
  );
}