import React, { Component } from 'react';

export default class NameHeader extends Component {
  render() {
    const { givenName, surname } = this.props.nameObj;
    return (
      <div className="name-wrapper">
        <div>{givenName}</div>
        <div>{surname}</div>
      </div>
    );
  }
}