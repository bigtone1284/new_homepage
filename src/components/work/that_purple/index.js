import React, { Component } from 'react';
import '../../../../style/that_purple/index.scss';

import $ from 'jquery';

export default class ThatPurple extends Component {
  render() {
    return (
      <div id="purple-section">
        <section id="filter"></section>
        <section id="container">
        <div id='back-home' hidden>
          <a href="/work" title="Back to Home"><i className="fa fa-arrow-left fa-4x"></i></a>
          <p>That Purple.</p>
        </div>
        </section>
        <section id="modal">
          <div id="close">X</div>
          <ul>
            <li id="hex"></li>
            <li id="rgb"></li>
            <li id="hsl"></li>
          </ul>
        </section>
      </div>
    );
  }

  randomPurple() {
    var h = Math.round(Math.random() * (310 - 290) + 290);
    var s = Math.round(Math.random() * (80 - 20)) + 20;
    var l = Math.round(Math.random() * (65 - 20)) + 20;
    return ['hsl','(', h,', ', s, '%, ', l, '%',')'].join('');
  }

  calcNumSquares() {
    var width = container.getBoundingClientRect().width;
    var height = container.getBoundingClientRect().height;
    var columns = Math.floor(width/50);
    var rows = Math.floor(height/50);
    return rows * columns;
  }

  purpleSpan() {
    var span = document.createElement('span');
    span.classList.add('purple');
    var purple = this.randomPurple();
    span.setAttribute('hsl', purple);
    span.style.background = purple;
    span.addEventListener('click', (ev) => {
      this.bigPurpleInfo(ev);
    });
    container.appendChild(span);
  }

  renderPurpleSpans() {
    var numberOfSpans = this.calcNumSquares();
    for (var i = numberOfSpans; i > 0; i--) {
      this.purpleSpan();
    }
  }

  bigPurpleInfo(ev) {
    var background = ev.target.style.background;
    modal.style.background = background;
    modal.classList.add('visible');
    hex.innerHTML = this.hexValues(background);
    hsl.innerHTML = ev.target.getAttribute('hsl');
    rgb.innerHTML = background;
    var close = modal.querySelector('div');
    close.addEventListener('click', () => {
      this.closeModal()
    });
    this.addFilter();
  }

  closeModal() {
    modal.classList.remove('visible');
    this.closeFilter();
  }

  addFilter() {
    filter.classList.add('haze');
  };

  closeFilter() {
    filter.classList.remove('haze');
  }

  hexValues(rgbValues) {
    var rgb = rgbValues.slice(4, rgbValues.length - 1).split(', ');
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    return 'hex #' + [this.numToHex(r), this.numToHex(g), this.numToHex(b)].join('').toUpperCase();
  }

  numToHex(num) {
    var hexCode = parseInt(num).toString(16);
    if (hexCode.length < 2) {
      hexCode = "0" + hexCode;
    }
    return hexCode;
  }

  componentDidMount() {
    this.renderPurpleSpans();
    document.getElementById('back-home').hidden = false;
  }
}