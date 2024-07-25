import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className = "navbar">
      <div className="navbar-left">
      <Link to="/">Home</Link>
  </div>
      <Link to="/">About</Link>
      <Link to="/">View Plants</Link>
    </nav>
  )
}