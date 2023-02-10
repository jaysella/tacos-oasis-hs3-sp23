export function MenuItemLink({ url, name, description, tags }) {
  console.log("---");
  console.log(name);
  console.log(description);
  console.log("---");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="menu-item"
    >
      <p className="name">
        <b>{name}</b>
        {tags && tags.length > 0 && <small>&nbsp; (v)</small>}
      </p>
      {description && description.length > 0 && (
        <p className="description">{description}</p>
      )}
    </a>
  );
}

export function MenuItem({ name, description, tags, ...props }) {
  return (
    <div className="menu-item" {...props}>
      <p className="name">
        <b>{name}</b>
        {tags && tags.length > 0 && <small>&nbsp; (v)</small>}
      </p>
      {description && description.length > 0 && (
        <p className="description">{description}</p>
      )}
    </div>
  );
}
