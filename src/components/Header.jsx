import React, { Component } from 'react';
import '../style/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="page__text header__h1">Sistema Solar</h1>
        {/* <img className="img__elipse" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Simple_Ellipse.svg/1024px-Simple_Ellipse.svg.png" alt="SVG elipse" /> */}
      </header>
    );
  }
}
