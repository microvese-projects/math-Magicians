import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
