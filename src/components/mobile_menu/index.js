import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import classnames from 'classnames';
import { Link } from 'react-router';

class MobileMenu extends Component {

  handleNavClick(evt) {
    this.props.closeMobileMenuIcon();
    this.props.changeCurrentSection(evt.target.dataset.section);
  }

  handleClassNames(section) {
    if (section === this.props.currentSection) {
      return 'current-section';
    }
  }

  renderLink(link, text) {
    return (
      <Link data-section={text} to={link}>{text}</Link>
    )
  }

  renderMenu() {
    return this.props.sections.map(function({ link, text }, idx) {
      return (
        <li key={idx} onClick={this.handleNavClick.bind(this)}  className={this.handleClassNames(text)}>
          {this.renderLink(link, text)}
        </li>
      );
    }.bind(this));
  }

  render() {
    let classNames = classnames({
      "mobile-menu": true,
      "show-mobile-menu": this.props.showMobileMenu
    });

    return (
      <div className={classNames}>
        <ul className="no-bullets">
          {this.renderMenu()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showMobileMenu: !state.mobileMenu.showMobileMenuIcon,
    currentSection: state.currentSection.currentSection
  };
}

export default connect(mapStateToProps, actions)(MobileMenu);