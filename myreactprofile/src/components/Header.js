import React from 'react';
import coverImage from '../assets/deve-code2.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between">
      <h1>Andrew Garcia's Developer Portfolio</h1>
      <img src={coverImage} alt="coding background"></img>
      {props.children}
    </header>
  );
}

export default Header;
