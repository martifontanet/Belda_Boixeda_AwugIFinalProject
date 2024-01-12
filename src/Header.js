import React from 'react';
import Search from './Search';
import logo from './img/BoixeldaLogo.png';
import {
  Link
} from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
        
        <Link className="linkHeader" to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Boixelda Beers</h1>
        </Link>

        <Search />

    </header>
  );
}

export default Header;