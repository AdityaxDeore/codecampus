import React from "react";
import Routes from "./Routes";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Routes />
    </DarkModeProvider>
  );
}

export default App;
