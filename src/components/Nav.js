import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <h1>Math Magicians</h1>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
