import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <div className="resume-subsection experience-section">
        <h2>Experience</h2>
        <div className="experiences-container">
          {this.renderExperiences()}
        </div>
      </div>
    );
  }

  renderExperiences() {
    return this.props.experienceArr.map(({ companyName, title, startDate, endDate, location, summary, spec }, index) => {
      return (
        <dl key={companyName + index}>
          <dd>Company Name</dd>
          <dt>{companyName}</dt>

          <dd>Job Title</dd>
          <dt>{title}</dt>

          <dd>Dates + Location</dd>
          <dt>{startDate} - {endDate} &#x2022; {location}</dt>

          <dd>Summary</dd>
          <dt>{summary}</dt>

          <dd>Spec</dd>
          <dt>
            <ul>
              {this.renderSpec(spec)}
            </ul>
          </dt>
        </dl>
      );
    });
  }

  renderSpec(specArr) {
    return specArr.map((spec, index) => {
      return (
        <li key={spec + index}>{spec}</li>
      );
    });
  }
}