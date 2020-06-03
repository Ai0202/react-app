import React from 'react';
import MemberList from "../../organisms/MemberList";
import { Header } from "../../organisms/Header";


export const Members: React.FC = () => {
  return (
    <div>
      {/* TODO 共通部分の切り出し */}
      <Header />
      <MemberList />
    </div>
  )
}