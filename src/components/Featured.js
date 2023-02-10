export function Featured() {
  return (
    <div className="menu-section">
      <h2>Featured Tacos</h2>

      <div className="menu-items">
        <div className="menu-item">
          <p className="name">
            <b>Asian Style Tacos</b>
          </p>
          <p className="callouts">
            Pork Marinade, Asian Pickled Vegetables, Asian Cabbage Slaw
          </p>
        </div>

        <div className="menu-item">
          <p className="name">
            <b>Baja Fish Tacos</b>
          </p>
          <p className="callouts">Baja White Sauce</p>
        </div>

        <div className="menu-item">
          <p className="name">
            <b>Black Bean, Potato, and Onion Tacos</b> <small>(v)</small>
          </p>
          <p className="callouts">Garlic Black Beans</p>
        </div>
      </div>
    </div>
  );
}
