import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/Menu/MenuContainer";
import { MenuItem, MenuItemLink } from "./components/Menu/MenuItem";
import { TacoComponent } from "./components/Menu/TacoComponent";
import { TacoTruck } from "./components/TacoTruck";

function App() {
  const [animateTacoTruck, setAnimateTacoTruck] = useState(false);
  const [recipe, setRecipe] = useState();

  async function getRandomTaco() {
    await axios
      .get("https://tacos.girocibo.com/api/tacos") // GET the members from this endpoint
      .then(({ data }) => {
        setRecipe(data[0]);
        console.log(data[0]);
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred.");
      });
  }

  useEffect(() => {
    getRandomTaco();
  }, []);

  return (
    <div className="page-wrapper">
      <Header />

      <MenuContainer>
        {recipe ? (
          <>
            <div className="highlights-menu">
              <TacoComponent name="Base">
                {recipe.bases.map((b) => (
                  <MenuItemLink
                    key={b.url}
                    url={b.url}
                    name={b.name}
                    description={b.recipe.replace(/^(?!#|\*).*$/gm, "")}
                    tags={b.tags}
                  />
                ))}
              </TacoComponent>

              <TacoComponent name="Mixin">
                {recipe.mixins.length > 0 ? (
                  recipe.mixins.map((b) => (
                    <MenuItemLink
                      key={b.url}
                      url={b.url}
                      name={b.name}
                      description={b.recipe.replace(/^(?!#|\*).*$/gm, "")}
                      tags={b.tags}
                    />
                  ))
                ) : (
                  <MenuItem name="None" />
                )}
              </TacoComponent>

              <TacoComponent name="Condiment">
                {recipe.condiments.length > 0 ? (
                  recipe.condiments.map((b) => (
                    <MenuItemLink
                      key={b.url}
                      url={b.url}
                      name={b.name}
                      description={b.recipe.replace(/^(?!#|\*).*$/gm, "")}
                      tags={b.tags}
                    />
                  ))
                ) : (
                  <MenuItem name="None" />
                )}
              </TacoComponent>

              <TacoComponent name="Seasoning">
                {recipe.seasoning ? (
                  <MenuItemLink
                    url={recipe.seasoning.url}
                    name={recipe.seasoning.name}
                    description={recipe.seasoning.recipe.replace(
                      /^(?!#|\*).*$/gm,
                      ""
                    )}
                  />
                ) : (
                  <MenuItem name="None" />
                )}
              </TacoComponent>
            </div>

            <div
              className={["taco-truck", animateTacoTruck ? "animate" : ""].join(
                " "
              )}
              onClick={() => setAnimateTacoTruck(!animateTacoTruck)}
            >
              <TacoTruck />
            </div>
          </>
        ) : (
          <p>Loading</p>
        )}
      </MenuContainer>

      <div style={{ marginTop: `7.5rem` }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
