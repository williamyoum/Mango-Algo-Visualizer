import React from 'react';
import { Link } from "react-router-dom";
import mango from '../mango.svg'
// import Controls from '../components/Shared/Controls'

function Header() {
  const navStyle = {
    display: "flex",
    alignItems: 'center',
    width: '100%',
    height: '100x',
    padding: '5px',
    boxShadow: '0 4px 2px -2px gray',
    marginBottom: '10px',
  }
  const logoStyle = {
    height: '75px',
    marginRight: '20px'
  }
  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem',

  }
  const listStyle = {
    margin: '0 1% 0 1% ',
  }

  
  return (
    <nav style={navStyle}>
      <Link to="/"><img style={logoStyle} src={mango} alt="Logo" /></Link>
      <div style={titleStyle}>Mango</div>
        &nbsp; 
        <div style = {listStyle}><Link to="/sort">SORT</Link></div>
          &nbsp;
        <div style = {listStyle}><Link to="/graph">GRAPH</Link> </div>
          &nbsp;

    </nav>
  );
}
export default Header;