import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-item">
          Összes előadó
        </Link>
        <Link to="/add-concert" className="navbar-item">
          Új koncert hozzáadása
        </Link>
      </div>
    </nav>
  );
}
