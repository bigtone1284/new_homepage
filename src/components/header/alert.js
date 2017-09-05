import React, { Component } from 'react';
import classnames from 'classnames';

class Alert extends Component {

  handleClassnames() {
    const alert = this.props.alert;

    return classnames({
      'alert-message': 'true',
      alert: alert === 'alert',
      success: alert === 'success'
    });
  }

  render() {
    return (
      <div className={this.handleClassnames()}>
        Success
      </div>
    );
  }
}

export default Alert;