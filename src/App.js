import { useState } from "react";
import "./App.css";
import { GeneratedTaco } from "./components/GeneratedTaco";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/Menu/MenuContainer";
import { TacoBuilder } from "./components/TacoBuilder";
import { TacoTruck } from "./components/TacoTruck";

const initialComponents = [
  {
    url: "https://github.com/dansinker/tacofancy/blob/master/full_tacos/asian_style_tacos.md",
    name: "Asian Style Tacos",
    description: "Pork Marinade, Asian Pickled Vegetables, Asian Cabbage Slaw",
    type: "base",
    tags: [],
  },
  {
    url: "https://github.com/dansinker/tacofancy/blob/master/full_tacos/baja_fish_tacos.md",
    name: "Baja Fish Tacos",
    description: "Baja White Sauce",
    type: "base",
    tags: [],
  },
  {
    url: "https://github.com/dansinker/tacofancy/blob/master/full_tacos/black_bean_potato_onion_tacos.md",
    name: "Black Bean, Potato, and Onion Tacos",
    description: "Garlic Black Beans",
    type: "base",
    tags: ["vegetarian", "vegan"],
  },
];

function App() {
  const [animateTacoTruck, setAnimateTacoTruck] = useState(false);
  const [components, setComponents] = useState(initialComponents);
  const [recipe, setRecipe] = useState(initialComponents);
  const [showRecipe, setShowRecipe] = useState(false);

  return (
    <div className="page-wrapper">
      <Header />

      <MenuContainer>
        <button
          type="button"
          id="generate"
          onClick={() => setShowRecipe(!showRecipe)}
          className="button"
        >
          {showRecipe ? "Modify Taco" : "Make Taco"} &rarr;
        </button>

        {showRecipe ? (
          <>
            <div className="highlights-menu">
              <GeneratedTaco components={components} />
            </div>
            <div
              className={["taco-truck", animateTacoTruck && "animate"].join(
                " "
              )}
              onClick={() => setAnimateTacoTruck(!animateTacoTruck)}
            >
              <TacoTruck />
            </div>
          </>
        ) : (
          <div className="highlights-menu">
            <TacoBuilder
              name="Base"
              components={
                components && components.filter((c) => c.type === "base")
              }
              recipe={recipe}
              setRecipe={setRecipe}
            />
            <TacoBuilder
              name="Mixin"
              components={
                components && components.filter((c) => c.type === "mixin")
              }
              recipe={recipe}
              setRecipe={setRecipe}
            />
            <TacoBuilder
              name="Condiment"
              components={
                components && components.filter((c) => c.type === "condiment")
              }
              recipe={recipe}
              setRecipe={setRecipe}
            />
            <TacoBuilder
              name="Seasoning"
              components={components}
              recipe={recipe}
              setRecipe={setRecipe}
            />
          </div>
        )}
      </MenuContainer>

      <div style={{ marginTop: `7.5rem` }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
