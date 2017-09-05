import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router';

class Nav extends Component {

  handleNavClick() {
    this.props.toggleMobileMenuIcon()
  }

  handleNavHeaderClick(evt) {
    this.props.closeMobileMenuIcon();
    this.props.changeCurrentSection(evt.target.dataset.section);
  }

  handleClassName(sectionText) {
    if (sectionText === this.props.currentSection) {
      return "current-section";
    }
  }

  renderNavIcon() {
    let icon;
    if (this.props.showHamburger) {
      icon = (
        <i className="fa fa-bars fa-3x" aria-hidden="true"></i>
      );
    } else {
      icon = (
        <i className="fa fa-times fa-3x" aria-hidden="true"></i>
      );
    }
    return icon;
  }

  renderLink(link, text) {
    return (
      <Link
        data-section={text}
        className="nav-link"
        to={link}
      >{text}</Link>
    );
  }

  renderNavHeaders() {
    return this.props.navItems.map(({ link, text }, idx) => {
      return (
        <li key={idx} onClick={this.handleNavHeaderClick.bind(this)} className={this.handleClassName(text)}>
          {this.renderLink(link, text)}
        </li>
      );
    });
  }

  render() {
    return (
      <nav role="navigation" data-main-nav>
        <ul className="no-bullets">
          {this.renderNavHeaders()}
        </ul>
        <div className="navIcon" onClick={this.handleNavClick.bind(this)}>
          {this.renderNavIcon()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    showHamburger: state.mobileMenu.showMobileMenuIcon,
    currentSection: state.currentSection.currentSection
  };
}

export default connect(mapStateToProps, actions)(Nav);