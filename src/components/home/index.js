import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import classnames from 'classnames';

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById('greeting').classList.remove('hide');
    }, 2000);
  }

  render() {
    let classNames = classnames({
      "hide-mobile": this.props.hideContentMobile,
      "home-wrapper": true
    });
    return (
      <div className={classNames}>
        <div className="intro-container">
          <div className="greeting-container">
            <span id="greeting" className='hide'>Hello. My name is Tony DeFreitas, and I am a Web Developer and User Experience Designer.  Currently residing in San Francisco, California.</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hideContentMobile: !state.mobileMenu.showMobileMenuIcon
  };
}

export default connect(mapStateToProps, actions)(Home);