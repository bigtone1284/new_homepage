import React, { Component } from 'react';
import Logo from '../logo';
import Nav from './nav';
import Alert from './alert';

class Header extends Component {

  render() {
    const searchParams = new URLSearchParams(location.search),
      alertStatus = searchParams.get('alert');

    return (
      <div className="header-wrapper">
        <Alert alert={alertStatus} />
        <header className="main-header">
          <Logo />
          <Nav navItems={this.props.sections}/>
        </header>
      </div>
    );
  }
}

export default Header;