import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import classnames from 'classnames';
import { name, contactInfo, experience, education, skills } from '../../../data_json/resume.json';

import NameHeader from './name_header';
import ContactList from './contact_list';
import Experience from './experience';
import Education from './education';
import Skills from './skills';

class Resume extends Component {
  render() {
    let classNames = classnames({
      "hide-mobile": this.props.hideContentMobile,
      "resume-wrapper": true
    });

    return (
      <section className={classNames}>
        <header>
          <NameHeader nameObj={name} />
          <ContactList contactArr={contactInfo} />
        </header>
        <Experience experienceArr={experience} />
        <Education educationArr={education} />
        <Skills skillsObj={skills} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    hideContentMobile: !state.mobileMenu.showMobileMenuIcon
  };
}

export default connect(mapStateToProps, actions)(Resume);