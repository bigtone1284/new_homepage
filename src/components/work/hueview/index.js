import React, { Component } from 'react';
import '../../../../style/hueview/index.scss';

import $ from 'jquery';


export default class Hueview extends Component {

  startGame() {
    var startGameDiv = document.getElementById('startGame'),
      squares = document.getElementById('squares'),
      timerDisplay = document.getElementById('timerText'),
      timerText = timerDisplay.innerHTML,
      interval;
    if (!startGameDiv.classList.contains('hidden')) {
      $(startGameDiv).fadeOut(500, function() {
        startGameDiv.classList.add('hidden');
        startGameDiv.setAttribute('style', '');
        squares.classList.remove('hidden');
      });
    }
    this.addSquares(4);
    interval = setInterval(() => {
      timerDisplay.innerHTML = timerText;
      timerText = parseInt(timerText, 10) - 1;
      if (timerText < 0) {
        this.endGame();
        clearInterval(interval);
      }
    },1000);
  }

  moreSquares() {
    var scoreBoard = document.getElementById('scoreText'),
      score = parseInt(scoreBoard.innerHTML, 10) + 1,
      squares;
    scoreBoard.innerHTML = score;
    squares = (score > 16) ? 16 : score;
    this.addSquares(Math.pow(Math.floor(2 + (squares / 2)), 2));
  }

  getRandomColor() {
    var r = Math.floor(Math.random() * 255 );
    var g = Math.floor(Math.random() * 255 );
    var b = Math.floor(Math.random() * 255 );
    return [r,g,b];
  }

  colorMash(rgb, range) {
    return rgb.map(function(color) {
      return Math.floor((Math.random() * (2 * range)) + (color - range));
    });
  }

  addSquares(newSquares) {
    if (newSquares > 0) {
      var color = this.getRandomColor(),
        range = (newSquares > 100) ? 110 : newSquares,
        differentColor = this.colorMash(color, 255),
        randomSquare = Math.floor(Math.random() * (newSquares -1)),
        squaresDiv = document.getElementById('squares'),
        squaresDivWidth = $(squaresDiv).width(),
        side = (squaresDivWidth / Math.sqrt(newSquares) - 10) + 'px',
        i = 0,
        squareColor,
        squareStyle,
        square;

      squaresDiv.innerHTML = '';
      for (i; i < newSquares; i++) {
        square = document.createElement('div');
        square.classList.add('square');
        if (i === randomSquare) {
          squareColor = 'rgb(' + differentColor.join(',') + ')';
          square.id = 'differentSquare';
        } else {
          squareColor = 'rgb(' + color.join(',') + ')';
        }
        squareStyle = ['background:' + squareColor, 'width:' + side, 'height:' + side].join(';');
        square.setAttribute('style', squareStyle);
        squaresDiv.appendChild(square);
      }
    }
  }

  endGame() {
    var score = document.getElementById('scoreText'),
      squares = document.getElementById('squares'),
      playAgain = document.getElementById('playAgain'),
      finalScore = document.getElementById('scoreText').innerHTML,
      finalScoreText = document.getElementById('finalScore');
    $(squares).fadeOut(500, () => {
      squares.classList.add('hidden');
      squares.setAttribute('style', '');
      squares.innerHTML = '';
      finalScoreText.innerHTML = '<span>' + 'Your final score was ' + finalScore + '.</span>';
      playAgain.classList.remove('hidden');
    });
  }

  restartGame() {
    var playAgainDiv = document.getElementById('playAgain'),
      squares = document.getElementById('squares');
    $(playAgainDiv).fadeOut(500, function() {
      playAgainDiv.classList.add('hidden');
      playAgainDiv.setAttribute('style', '');
      document.getElementById('timerText').innerHTML = 30;
      document.getElementById('scoreText').innerHTML = 0;
      squares.classList.remove('hidden');
      this.startGame();
    });
  }

  componentDidMount() {
    var startButton = document.getElementById('startButton'),
      playAgainButton = document.getElementById('playAgainButton'),
      squaresDiv = document.getElementById('squares');
    
    startButton.addEventListener('click', () => {
      this.startGame()
    });
    playAgainButton.addEventListener('click', () => {
      this.restartGame()
    });
    squaresDiv.addEventListener('click', (ev) => {
      if (ev.target.id === 'differentSquare') {
        this.moreSquares();
      }
    });
  }

  render() {
    return (
      <div id='main'>
        <div className='game' id='scoreboard'>
          <div className='scoreboardGroup' id='backHome'>
            <a href="/work" title="Back to Home"><i className="fa fa-arrow-left fa-4x"></i></a>
            <span>HueView.</span>
          </div>
          <div className='scoreboardGroup' id='timer'>
            <span className='label'>Time</span>
            <span id='timerText' className='gameData'>30</span>
          </div>
          <div className='scoreboardGroup' id='score'>
            <span className='label'>Score</span>
            <span id='scoreText' className='gameData'>0</span>
          </div>
        </div>
        <div className='game' id='gameboard'>
          <div id='startGame' className='gameMessage'>
            <div className='gameButton' id='startButton'>
              <span className='buttonText'>Start</span>
            </div>
            <div className='gameText' id='gameInstruction'>
              <span>Click the tile that's a different color.</span>
            </div>
          </div>
          <div id='squares' className='hidden'></div>
          <div id='playAgain' className='gameMessage hidden'>
            <div className='gameText' id='finalScore'></div>
            <div className='gameButton' id='playAgainButton'>
              <span className='buttonText'>Play Again!</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}