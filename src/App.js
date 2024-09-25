import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import StartPage from "./Game Components/Start Page";
import GamingPage from "./Game Components/Gaming Page";
import { useState } from "react";

function App() {
  const [globalOperands, SetglobalOperands] = useState([]);

  const GetData = (data) => {
    SetglobalOperands(data);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage GetData={GetData} />} />
          <Route
            path="/game"
            element={<GamingPage operands={globalOperands} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
