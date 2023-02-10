export function TacoComponent({ name, children }) {
  return (
    <div>
      <h2>{name}</h2>

      <div className="menu-items">{children}</div>
    </div>
  );
}
