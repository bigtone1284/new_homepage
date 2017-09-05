import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    return (
      <ul className="no-bullets no-space">
        {this.renderContactListItems()}
      </ul>
    );
  }

  renderContactListItems() {
    const { contactArr } = this.props;
    return contactArr.map(({ text, href, fontAwesomeClass }, index) => {
      return (
        <li key={text + index}>
          <a href={href} target="_blank" >
            <span>
              <i className={`fa ${fontAwesomeClass}`} aria-hidden="true"></i>
              <span> {text}</span>
            </span>
          </a>
        </li>
      );
    });
  }
}