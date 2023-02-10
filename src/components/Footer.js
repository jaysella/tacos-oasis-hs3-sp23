import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        Spring '23 &#183; Jay Sella &#183;{" "}
        <a href="https://oasisneu.com/" rel="noopener noreferrer">
          Oasis
        </a>{" "}
        &#183; Data:{" "}
        <a
          href="https://tacos.girocibo.com/api/tacos"
          rel="noopener noreferrer"
        >
          tacos.girocibo.com
        </a>
      </p>
    </footer>
  );
}
