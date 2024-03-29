import React from 'react';
import Search from '../Search';
import logo from '../img/BoixeldaLogoH.png';
import {
  Link
} from 'react-router-dom';

function Header() {
  return (
    <header id='head' className="a App-header">
        
        <Link to="/">
            <img src={logo} className="logo" alt="logo" />
        </Link>

        <Search />

    </header>
  );
}

export default Header;