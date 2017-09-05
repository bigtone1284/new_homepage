import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    const { programmingLanguages, frameworkLibraries, otherTools } = this.props.skillsObj;
    return (
      <div className="resume-subsection">
        <h2>Skills</h2>
        <div className="skills-container">
          <dl>
            <dd>Programming Languages</dd>
            <dt>Programming Languages - {this.renderSkillList(programmingLanguages)}</dt>
            
            <dd>Frameworks & Libraries</dd>
            <dt>Frameworks & Libraries - {this.renderSkillList(frameworkLibraries)}</dt>

            <dd>Other Tools</dd>
            <dt>Other Tools - {this.renderSkillList(otherTools)}</dt>
          </dl>
        </div>
      </div>
    );
  }

  renderSkillList(list) {
    return list.map(({ name }) => {
      return name;
    }).join(', ');
  }
}