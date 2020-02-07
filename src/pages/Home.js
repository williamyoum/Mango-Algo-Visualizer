import React from 'react';
// import Footer from '../components/Footer.js'
// import Dropdown from '../components/Shared/Dropdown.js';
// import Header from '../components/Header.js';
// import Home from 'Home.css';
import { Link } from "react-router-dom";


class Home extends React.Component {
  render() {
    return (
      <div className = "main-buttons">
        <button><Link to="/sort">SORT</Link></button>
        <button><Link to="/sort">GRAPH</Link></button>
      </div>
    );
  }
}

export default Home;