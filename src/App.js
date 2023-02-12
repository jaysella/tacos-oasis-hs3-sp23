import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MenuContainer } from "./components/Menu/MenuContainer";
import { MenuItemLink } from "./components/Menu/MenuItem";
import { TacoComponent } from "./components/Menu/TacoComponent";
import { TacoTruck } from "./components/TacoTruck";
import { truncate } from "./lib/truncate";

function App() {
  const [animateTacoTruck, setAnimateTacoTruck] = useState(false);

  return (
    <div className="page-wrapper">
      <Header />

      <MenuContainer>
        <div className="highlights-menu">
          <div className="highlights-menu-row row-span-3">
            <TacoComponent name="Base">
              <MenuItemLink
                url="https://github.com/dansinker/tacofancy/blob/master/base_layers/zucchini_corn.md"
                name="Zucchini and Corn Filling"
                description={truncate(
                  "Can of plain black beans 3 - 6 cloves of garlic chopped fine Vegetable oil of your choice Cumin Cayenne or Chipotle pepper (optional) Lemon juice (optional)  Heat a tablespoon of olive oil in a saucepan over medium heat.  When olive oil starts to shimmer, add the garlic and let it simmer for about 10 seconds. Add cumin and pepper (if wanted) and simmer for another 10 seconds. Pour in the entire can of beans, don't drain or rinse them. Simmer for about 15 minutes or until the bean broth has thickened to your liking. If the beans will be the main ingredient of your tacos, cook until the beans are just about totally dry. If you're using them in a mixture (like the Black Bean, Potato, and Onion Tacos ), let the broth stay a little bit runny. Add a squeeze or two of lemon juice if you like.",
                  150
                )}
                tags={["vegan"]}
              />
            </TacoComponent>

            <TacoComponent name="Mixin">
              <MenuItemLink
                url="https://github.com/dansinker/tacofancy/blob/master/mixins/Potato_hash.md"
                name="Potato Hash"
                description={truncate(
                  "Potato * 6 or so small yukon gold poatoes  4 green onion, chopped 1/2 small can of green chiles olive oil coarse salt 1/4t chili powder dash cumin 1/4t garlic powder Nutrional yeast (optional)  Peel and dice potatoes, throw in a pan with a 1/4 or so of water, cover and cook on medium-high until potatoes are soft. Once potatoes are soft, lower to medium heat add green onions, chiles, spices and olive oil. Cook until hash-like. BOOM.",
                  150
                )}
                tags={["vegetarian"]}
              />
            </TacoComponent>
          </div>

          <div className="highlights-menu-row row-span-2">
            <TacoComponent name="Condiment">
              <MenuItemLink
                url="https://github.com/dansinker/tacofancy/blob/master/condiments/Pico_de_gallo.md"
                name="Pico de Gallo"
                description={truncate(
                  "Super Quick & Easy Pico  1 pint grape tomatoes, quartered (make your kids do this part) 3 tablespoons finely chopped white onion Coarse salt Squeeze of lime As many finely chopped red (or green) jalapeños as you want (optional)  Combine the tomatoes, cilantro and onion together in a bowl. Season to taste with salt and lime.  Reserve some of this mixture for kids, and then add as much jalapeño as you like to the remaining mixture for the non wimps.",
                  150
                )}
                tags={["vegan"]}
              />
            </TacoComponent>

            <TacoComponent name="Seasoning">
              <MenuItemLink
                url="https://github.com/dansinker/tacofancy/blob/master/seasonings/universal_taco_seasoning.md"
                name="Universal Taco Seasoning"
                description={truncate(
                  "I got tired of buying packets of store-bought taco seasoning, so I experimented with various spices and ratios until I landed on this recipe. I keep a jar of it in the cupboard at all times.  6 tbsp chili powder 4 tbsp cumin 4 tbsp corn starch 3 tbsp onion powder 1 tbsp salt 1 tbsp garlic powder 4 tsp oregano (Mexican oregano, if you've got it) 2 tsp crushed red pepper  Combine in Mason jar and shake well to combine.  This mix works well for chicken, pork and beef, destined for the grill, oven, slow cooker or stovetop. You could tweak it a bit to target a specific meat, but I like to have a base, universal mix around. Makes it super easy to turn leftover anything into delicious taco filling: Just chop up whatever it is, toss it into a skillet, sprinkle generously with seasoning, then add a bit of water and simmer to impart flavor.",
                  150
                )}
                tags={["vegetarian"]}
              />
            </TacoComponent>

            <TacoComponent name="Shell">
              <MenuItemLink
                url="https://github.com/dansinker/tacofancy/blob/master/shells/Fresh_corn_tortillas.md"
                name="Fresh Corn Tortillas"
                description={truncate(
                  "This is the only way to go. So worth it. Makes roughly 15 tortillas.  1 3/4 cups masa harina 1 1/8 cups water  In a medium bowl, mix together masa harina and hot water until thoroughly combined. Turn dough onto a clean surface and knead until pliable and smooth. If dough is too sticky, add more masa harina; if it begins to dry out, sprinkle with water. Cover dough tightly with plastic wrap and allow to stand for 30 minutes. Preheat a cast iron skillet or griddle to medium-high. Divide dough into 15 equal-size balls. Using a tortilla press (or a rolling pin), press each ball of dough flat between two sheets of wax paper (plastic wrap or a freezer bag cut into halves will also work). Place tortilla in preheated pan and allow to cook for approximately 30 seconds, or until browned and slightly puffy. Turn tortilla over to brown on second side for approximately 30 seconds more, then transfer to a plate. Repeat process with each ball of dough. Keep tortillas covered with a towel to stay warm and moist (or a low temp oven) until ready to serve.",
                  150
                )}
                tags={["vegetarian"]}
              />
            </TacoComponent>
          </div>
        </div>

        <div
          className={`taco-truck ${animateTacoTruck ? "animate" : ""}`}
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
