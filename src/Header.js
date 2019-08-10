import React, { Component } from 'react';
import Background from './img/monstera.jpg';
import './Header.css'
// import Navigation from './Navigation'
  const myStyles = {
       backgroundImage: `url( ${Background})`,
       height: '100vh',
       backgroundSize: 'cover'
  }

class Header extends Component {
    render() {
      return (
        <header style= {myStyles}>
          <h1>{this.props.title}</h1>
          <p>Well Come to my portfolio</p>
          <a href="#button">{this.props.button}</a>
        </header>
      );
    }
  }
export default Header;