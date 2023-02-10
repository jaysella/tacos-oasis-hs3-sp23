import { MenuItem } from "./Menu/MenuItem";

export function TacoBuilder({ name, components, recipe, setRecipe }) {
  const inRecipe = (component) => {
    return recipe.filter((c) => c.url === component.url).length > 0;
  };

  const updateComponents = (component) => {
    if (inRecipe(component)) {
      const filteredRecipe = recipe.filter((c) => c.url !== component.url);
      setRecipe(filteredRecipe);
    } else {
      setRecipe(recipe.push(component));
    }
  };

  return (
    <div>
      <h2>{name}</h2>

      <div className="menu-items">
        {components.map((c) => (
          <MenuItem
            key={c.url}
            name={c.name}
            onClick={() => updateComponents(c)}
          />
        ))}
      </div>
    </div>
  );
}
