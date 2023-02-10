export function TacoComponent({ name, children }) {
  return (
    <div>
      <h2>{name}</h2>

      {children}
    </div>
  );
}
