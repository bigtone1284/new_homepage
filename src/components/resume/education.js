import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    return (
      <div className="resume-subsection">
        <h2>Education</h2>
        <div className="education-container">
          {this.renderEducations()}
        </div>
      </div>
    );
  }

  renderEducations() {
    return this.props.educationArr.map(({ name, degree, relevantCoursework }, index) => {
      return (
        <dl key={name + index}>
          <dd>School</dd>
          <dt>{name}</dt>
          <dd>Degree and Date</dd>
          <dt>{degree} &#x2022; {degree}</dt>
          <dd>Relevant Coursework</dd>
          <dt>
            Relevant Coursework - {this.renderRelevantCoursework(relevantCoursework)}
          </dt>
        </dl>
      );
    });
  }

  renderRelevantCoursework(relevantCoursework) {
    return relevantCoursework.map(({ name }) => {
      return name
    }).join(', ');
  }
}