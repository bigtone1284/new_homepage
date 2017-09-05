import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';
import classnames from 'classnames';
import projects from '../../../data_json/projects.json'

class Work extends Component {
  render() {
    let classNames = classnames({
      "work-wrapper": true
    });
    return (
      <section className={classNames}>
        {this.renderProjects(projects)}
      </section>
    );
  }

  renderTechnologies(technologiesArr) {
    return technologiesArr.map(({ name, img }) => {
      return (
        <img
          key={img}
          alt={name}
          title={name}
          src={img}
          className="technology-icon"
        />
      );
    });
  }

  renderProjects(projects) {
    return projects.map(({ name, description, url, img, technologiesArr }, idx) => {
      return (
        <div key={name + idx} className="project-container">
          <a className="project-link" href={url} target="_blank">
            <div className="project-info">
              <div>
                {name}
                <p>
                  {description}
                </p>
              </div>
              <div>
                {this.renderTechnologies(technologiesArr)}
              </div>
            </div>
            <img
              alt={name}
              src={'../../../image/' + img}
              className="project-image"
            />
          </a>
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  return {
    hideContentMobile: !state.mobileMenu.showMobileMenuIcon
  };
}

export default connect(mapStateToProps, actions)(Work);