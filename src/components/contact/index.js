import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import classnames from 'classnames';

import ContactForm from './contact_form'

class Contact extends Component {

  render() {
    let classNames = classnames({
      'hide-mobile': this.props.hideContentMobile,
      'contact-page-wrapper': true
    });
    return (
      <div className={classNames}>
        <ContactForm />     
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, actions)(Contact);