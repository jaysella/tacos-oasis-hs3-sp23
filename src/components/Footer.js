import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        Spring 2023 &#183; By Jay Sella &#183; For{" "}
        <a href="https://oasisneu.com/" rel="noopener noreferrer">
          Oasis
        </a>
      </p>
      <p>
        Data:{" "}
        <a
          href="https://tacos.girocibo.com/api/tacos"
          rel="noopener noreferrer"
        >
          tacos.girocibo.com
        </a>{" "}
        &#183; Source:{" "}
        <a
          href="https://github.com/jaysella/tacos-oasis-hs3-sp23"
          rel="noopener noreferrer"
        >
          github.com
        </a>
      </p>
    </footer>
  );
}
