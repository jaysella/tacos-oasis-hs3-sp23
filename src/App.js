import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/Menu/MenuContainer";
import { MenuItemLink } from "./components/Menu/MenuItem";
import { TacoComponent } from "./components/Menu/TacoComponent";
import { TacoTruck } from "./components/TacoTruck";

function App() {
  const [animateTacoTruck, setAnimateTacoTruck] = useState(false);

  return (
    <div className="page-wrapper">
      <Header />

      <MenuContainer>
        <div className="highlights-menu">
          <TacoComponent name="Base">
            <MenuItemLink
              url="https://github.com/dansinker/tacofancy/blob/master/base_layers/asian_marinade.md"
              name="Asian Style Tofu or Pork Marinade"
              description="Vegetarian"
            />
          </TacoComponent>

          <TacoComponent name="Mixin">
            <MenuItemLink
              url="https://github.com/dansinker/tacofancy/blob/master/base_layers/asian_marinade.md"
              name="Sweet Potato and Apple Hash"
              description="Vegetarian"
            />
          </TacoComponent>

          <TacoComponent name="Condiment">
            <MenuItemLink
              url="https://github.com/dansinker/tacofancy/blob/master/base_layers/asian_marinade.md"
              name="Asian Cabbage Slaw"
              description="Vegetarian"
            />
          </TacoComponent>

          <TacoComponent name="Seasoning">
            <MenuItemLink
              url="https://github.com/dansinker/tacofancy/blob/master/seasonings/sriracha_salt.md"
              name="Sriracha Salt"
              description="Vegetarian and vegan"
            />
          </TacoComponent>
        </div>

        <div
          className={["taco-truck", animateTacoTruck && "animate"].join(" ")}
          onClick={() => setAnimateTacoTruck(!animateTacoTruck)}
        >
          <TacoTruck />
        </div>
      </MenuContainer>

      <div style={{ marginTop: `7.5rem` }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
