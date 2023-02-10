export function Featured() {
  return (
    <div className="menu-section">
      <h2>Featured Tacos</h2>

      <div className="menu-items">
        <FeaturedItem>
          <p className="name">
            <b>Asian Style Tacos</b>
          </p>
          <p className="callouts">
            Pork Marinade, Asian Pickled Vegetables, Asian Cabbage Slaw
          </p>
        </FeaturedItem>

        <FeaturedItem>
          <p className="name">
            <b>Baja Fish Tacos</b>
          </p>
          <p className="callouts">Baja White Sauce</p>
        </FeaturedItem>

        <FeaturedItem>
          <p className="name">
            <b>Black Bean, Potato, and Onion Tacos</b> <small>(v)</small>
          </p>
          <p className="callouts">Garlic Black Beans</p>
        </FeaturedItem>
      </div>
    </div>
  );
}

function FeaturedItem({ children }) {
  return (
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="menu-item"
    >
      {children}
    </a>
  );
}
