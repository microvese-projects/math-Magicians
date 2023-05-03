import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
