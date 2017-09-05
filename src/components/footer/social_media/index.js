import React, { Component } from 'react';
import classnames from 'classnames';
import socialMedia from '../../../../data_json/social_media.json';

class SocialMedia extends Component {

  getClassNames(fontAwesomeClass) {
    return classnames('fa', fontAwesomeClass, 'fa-2x');
  }

  renderSocialMedia() {
    return socialMedia.map(({ medium, url, fontAwesomeClass}) => {
      return (
        <li key={medium} className={medium}>
          <a href={url} target="_blank">
            <i className={this.getClassNames(fontAwesomeClass)} aria-hidden="true"></i>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="no-bullets no-space">
        {this.renderSocialMedia()}
      </ul>
    );
  }
}

export default SocialMedia;