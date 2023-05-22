import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-3">
      {/* <a href="/login">Login</a>
      <a href="/register">Register</a> */}
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/login">
        Login
      </NavLink>
      <NavLink className="navlink" to="/register">
        Register
      </NavLink>
    </nav>
  );
}
