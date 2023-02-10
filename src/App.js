import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/Menu/MenuContainer";
import { MenuItem, MenuItemLink } from "./components/Menu/MenuItem";
import { TacoComponent } from "./components/Menu/TacoComponent";
import { TacoTruck } from "./components/TacoTruck";
import { truncate } from "./lib/truncate";

function App() {
  const [animateTacoTruck, setAnimateTacoTruck] = useState(false);
  const [recipe, setRecipe] = useState();

  async function getRandomTaco() {
    await axios
      .get("https://tacos.girocibo.com/api/tacos/generate")
      .then(({ data }) => {
        if (data.error) {
          console.error(data.error);
          alert("An error occurred.");
        } else {
          setRecipe(data);
        }
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
              <div className="highlights-menu-row row-span-3">
                <TacoComponent name="Base">
                  {recipe.bases.map((b) => (
                    <MenuItemLink
                      key={b.url}
                      url={b.url}
                      name={b.name}
                      description={truncate(b.recipe_text, 150)}
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
                        description={truncate(b.recipe_text, 150)}
                        tags={b.tags}
                      />
                    ))
                  ) : (
                    <MenuItem name="None" />
                  )}
                </TacoComponent>
              </div>

              <div className="highlights-menu-row row-span-2">
                <TacoComponent name="Condiment">
                  {recipe.condiments.length > 0 ? (
                    recipe.condiments.map((b) => (
                      <MenuItemLink
                        key={b.url}
                        url={b.url}
                        name={b.name}
                        description={truncate(b.recipe_text, 150)}
                        tags={b.tags}
                      />
                    ))
                  ) : (
                    <MenuItem name="None" />
                  )}
                </TacoComponent>

                <TacoComponent name="Seasoning">
                  {recipe.seasonings.length > 0 ? (
                    recipe.seasonings.map((b) => (
                      <MenuItemLink
                        key={b.url}
                        url={b.url}
                        name={b.name}
                        description={truncate(b.recipe_text, 150)}
                        tags={b.tags}
                      />
                    ))
                  ) : (
                    <MenuItem name="None" />
                  )}
                </TacoComponent>

                <TacoComponent name="Shell">
                  {recipe.shell ? (
                    <MenuItemLink
                      url={recipe.shell.url}
                      name={recipe.shell.name}
                      description={truncate(recipe.shell.recipe_text, 150)}
                      tags={recipe.shell.tags}
                    />
                  ) : (
                    <MenuItem name="None" />
                  )}
                </TacoComponent>
              </div>
            </div>

            <div
              className={`taco-truck ${animateTacoTruck ? "animate" : ""}`}
              onClick={() => setAnimateTacoTruck(!animateTacoTruck)}
            >
              <TacoTruck />
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </MenuContainer>

      <div style={{ marginTop: `7.5rem` }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
