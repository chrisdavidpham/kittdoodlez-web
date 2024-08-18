import './Header.css';
import Cart from '../cart/Cart';
import React from 'react';

function Header() {

  return (
    <header className="header">
      <div className='headerItem'>
        <h1>Kittdoodlez</h1>
      </div>
      <div className='headerItem'>
        <Cart/>
      </div>
    </header>
  );
}

export default Header;
