import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import classnames from 'classnames';
import { Link } from 'react-router'
import socialMedia from '../../../data_json/social_media.json'
import SocialMedia from './social_media';
import Logo from '../logo';

class Footer extends Component {

  render() {
    let classNames;
    if (this.props.hideFooter) {
      classNames = "hide-mobile";
    }

    return (
      <footer className={classNames}>
        <div className="footer-section copyright">
          <p>Copyright &#169; {this.props.year} Tony DeFreitas</p>
        </div>
        <div className="footer-section logo">
          <Logo />
        </div>
        <div className="footer-section social-media">
          <SocialMedia />
        </div>
      </footer>
    );
  }
}

function mapStateToProps(state) {

  return {
    hideFooter: !state.mobileMenu.showMobileMenuIcon
  };
}

export default connect(mapStateToProps, actions)(Footer);