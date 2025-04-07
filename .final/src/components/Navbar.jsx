import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">HotelSys</Link>
      <Link className="nav-link" to="/rooms">Rooms</Link>
      <Link className="nav-link" to="/reservations">Reservations</Link>
      <Link className="nav-link" to="/form">Book</Link>
    </nav>
  );
}
