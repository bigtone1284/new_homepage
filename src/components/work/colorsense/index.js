import React, { Component } from 'react';
import '../../../../style/colorsense/index.scss';

import $ from 'jquery';

export default class ColorSense extends Component {
  render() {
    return (
      <div id="colorsense-section">
        <div id="controlPanel">
          <div className="controlPanels" id="back-home">
            <a href="/work" title="Back to Home">
              <i className="fa fa-arrow-left fa-4x"></i>
            </a>
            <p>Colorsense.</p>
          </div>
          <div className="controlPanels" id="colorPanel">
            <div className="formGroup" id="backgroundColorGroup">
              <label htmlFor="background-color">Color:</label>
              <input id="background-color" type="color" />
            </div>
            <div className="formGroup" id="colorSlider">
              <input id="blend-weight" type="range" min="0" max="100" />
            </div>
          </div>
        </div>
        <div id="color-grid"></div>
      </div>
    );
  }

  setTheColor(ev) {
    document.getElementById('blend-weight').value = 50;
    var colorGrid = document.getElementById('color-grid');
    colorGrid.style.background = ev.target.value;
    this.colorTheCells(ev.target.value);
  }

  gridTheGrid() {
    var colorGrid = document.getElementById('color-grid');
    for (var i = 0; i < 2500; i++) {
      var cell = document.createElement('span');
      cell.classList.add('color-cell');
      colorGrid.appendChild(cell);
    }
  }

  colorTheCells(color) {
    var cells = document.getElementsByClassName('color-cell'),
      white = "#FFFFFF",
      blend = this.colorBlender(color, white),
      blendColor = this.colorBlender(color, blend),
      blendWhite = this.colorBlender(white, blend),
      colors = [color, white, blend, blendColor, blendWhite];
    for (var i = 0, len = cells.length; i < len; i++) {
      var cell = cells[i];
      var cellColor = colors[Math.floor(Math.random() * 5)];
      cell.dataset.originalColor = cellColor;
      cell.style.backgroundColor = cellColor;
    }
  }

  colorBlender(color, colorTwo, weight) {
    weight = typeof weight !== "undefined" ? weight : 50;
    var red = this.hexAverage(color.substr(1,2), colorTwo.substr(1,2), weight);
    var green = this.hexAverage(color.substr(3,2), colorTwo.substr(3,2), weight);
    var blue = this.hexAverage(color.substr(5,2), colorTwo.substr(5,2), weight);
    return "#" + red + green + blue;
  }

  hexAverage(hex1, hex2, weight) {
    return Math.floor((weight * parseInt(hex1, 16) + (100 - weight) * parseInt(hex2, 16)) / 100).toString(16);
  }

  setTheBlend() {
    var cells = document.getElementsByClassName('color-cell');
    for (var i = 0, len = cells.length; i < len; i++) {
      var cell = cells[i];
      var originalColor = cell.dataset.originalColor;
      cell.style.backgroundColor = this.blendAverage(originalColor);
    }
  }

  blendAverage(originalColor) {
    var blendWeight = document.getElementById('blend-weight').value;
    var inputColor = document.getElementById('background-color').value;
    if (blendWeight > 50) {
      return this.colorBlender(inputColor, originalColor, 2 * (blendWeight - 50));
    } else if (blendWeight < 50) {
      return this.colorBlender("#FFFFFF", originalColor, 2 * (50 - blendWeight));
    }
  }

  componentDidMount() {
    var colorPicker = document.getElementById('background-color');
    var blender = document.getElementById('blend-weight');
    document.getElementById('background-color').value = '#cd5c5c';
    this.gridTheGrid();
    this.colorTheCells('#cd5c5c');
    colorPicker.onchange = (ev) => {
      this.setTheColor(ev);
    };
    blender.oninput = () => {
      this.setTheBlend();
    };
  }
}