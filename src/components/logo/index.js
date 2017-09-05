import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Logo extends Component {

  handleLogoClick() {
    this.props.closeMobileMenuIcon();
    this.props.changeCurrentSection('Home');
  }

  render() {
    return (
      <Link className="header-link" to='/'>
        <div className="logo" role="logo" onClick={this.handleLogoClick.bind(this)}>

          <span className="primary-color"></span>
          <span className="primary-color"></span>
          <span className="primary-color"></span>

          <span className="dark-primary-color"></span>
          <span className="primary-color"></span>
          <span className="dark-primary-color"></span>

          <span></span>
          <span className="primary-color"></span>
          <span></span>

          <span></span>
          <span className="dark-primary-color"></span>
          <span></span>

        </div>
      </Link>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, actions)(Logo);