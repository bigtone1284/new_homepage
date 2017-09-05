import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import MobileMenu from './mobile_menu';
import sectionData from '../../data_json/sections.json';

import '../../style/index.scss';

export default class App extends Component {

  render() {
    return (
      <div id="container">
        <Header sections={sectionData} />
        <div className="content-wrapper">
          <MobileMenu sections={sectionData}/>
          {this.props.children}
        </div>
        <Footer year={new Date().getFullYear()}/>
      </div>
    );
  }
}
