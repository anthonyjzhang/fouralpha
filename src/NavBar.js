import "./App.css";

export default function NavBar({ togglePage }) {
  return (
    <nav className="navbar">
      <p
        style={{ paddingTop: 10, color: "white", fontSize: 24 }}
        onClick={() => togglePage()}
      >
        fouralpha
      </p>
    </nav>
  );
}
