import { MenuItemLink } from "./Menu/MenuItem";

export function GeneratedTaco({ components }) {
  return (
    <div className="menu-section">
      <h2>Your Home-Made Taco</h2>

      <div className="menu-items">
        {components.map((c) => (
          <MenuItemLink
            url={c.url}
            name={c.name}
            description={c.description}
            tags={c.tags}
          />
        ))}
      </div>
    </div>
  );
}
