"use client"; // クライアントコンポーネントとしてマーク
import React from "react";
import FetchData from "./components/FetchData";

const App: React.FC = () => {
  return (
    <div>
      <h1>My App</h1>
      <FetchData collectionName="Projects" documentId="0ZSB0hL5Gr8RQVrER5J4" />
      <FetchData collectionName="skills" documentId="39SzmDqxEMLkqHlfWLTe" />
    </div>
  );
};

export default App;