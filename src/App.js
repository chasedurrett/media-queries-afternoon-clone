import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMobileMenuOpen: false
    };
  }

  toggleMobileMenu = () => {
    this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen})
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <div className="logo-container">
            <img
              alt="logo"
              className="logo-img"
              src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
            ></img>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">SERVICES</li>
              <li className="nav-list-item">PORTFOLIO</li>
              <li className="nav-list-item">ABOUT</li>
              <li className="nav-list-item">TEAM</li>
              <li className="nav-list-item">CONTACT</li>
            </ul>
          </nav>
          <nav className='mobile-nav'>
          <img
              alt="logo"
              className="mobile-logo-img"
              src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
            ></img>
          <button onClick={this.toggleMobileMenu} className='mobile-nav-menu'>MENU<span><img className='menu-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png'/></span></button>
          <ul className={`mobile-nav-list ${this.state.isMobileMenuOpen ? 'mobile-nav-list-open' : null}`}>
              <li className="mobile-nav list-item">SERVICES</li>
              <li className="mobile-nav list-item">PORTFOLIO</li>
              <li className="mobile-nav list-item">ABOUT</li>
              <li className="mobile-nav list-item">TEAM</li>
              <li className="mobile-nav list-item">CONTACT</li>
            </ul>
          </nav>
        </header>
        <div className='hero-container'>
          <div className='hero-content'>
            <div className='hero-welcome'>
              <h2>Welcome to our studio!</h2>
            </div>
            <div className='hero-phrase'>
              <h1>IT'S NICE TO MEET YOU</h1>
            </div>
            <div className='hero-button-container'>
              <button href='#2' className><a href="#2">TELL ME MORE</a></button>
            </div>
          </div>
        </div>
        <section id='2' className='services-section'>
          <div className='services-container'>
              <div className=''></div>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
