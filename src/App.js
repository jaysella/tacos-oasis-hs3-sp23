import { useState } from "react";
import "./App.css";
import { Featured } from "./components/Featured";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Seasonings } from "./components/Seasonings";
import { TacoTruck } from "./components/TacoTruck";

function App() {
  const [animateTacoTruck, setAnimateTacoTruck] = useState(false);
  return (
    <div className="page-wrapper">
      <Header />

      <Menu>
        <div className="highlights-menu">
          <Featured />
          <Seasonings />
        </div>

        <div
          className={["taco-truck", animateTacoTruck && "animate"].join(" ")}
          onClick={() => setAnimateTacoTruck(!animateTacoTruck)}
        >
          <TacoTruck />
        </div>
      </Menu>
    </div>
  );
}

export default App;
