import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Layout from './componets/layout';
import Home from './componets/Home';
import Blogs from './componets/blogs';
import Respiracion from './componets/tecRespiracion';
import NoPage from './componets/nopage';
import logo from './assets/logo_calm.png'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <img src={logo} alt="Logo" className="logo_calm" />
          <h1>Proyecto calm</h1>
          <Link to="/home">Go to Home</Link>
          <Link to="/blogs">Go to Blogs</Link>
          <Link to="/contact">Tecnicas de Respiracion</Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Respiracion />} />
            <Route path="*" element={<NoPage />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;