import React, { Component } from 'react';
import '../../../../style/keycode/index.scss';

import $ from 'jquery';

export default class Keycode extends Component {
  render() {
    return (
      <div id="keycode-section">
        <div id='displays' className='displays'>
          <div id='back-home'>
            <a href="index.html#top" title="Back to Home"><i className="fa fa-arrow-left fa-4x"></i></a>
            <p>Keycode.</p>
          </div>
          <div id='keyDisplay' className='displayGroup'>
            <div className='labelDisplay'>Key</div>
            <div id='keyField' className='displayElement'>&nbsp;</div>
          </div>
          <div id='keyCodeDisplay' className='displayGroup'>
            <div className='labelDisplay'>Keycode</div>
            <div id='keyCodeField' className='displayElement'>&nbsp;</div>
          </div>
        </div>
        <div className="keyboard">
          <div className="keyboardRow">
            <div id="key192" className="key"><span className="shift char">~</span><span className="unshift char">`</span></div>
            <div id="key49" className="key"><span className="shift char">!</span><span className="unshift char">1</span></div>
            <div id="key50" className="key"><span className="shift char">@</span><span className="unshift char">2</span></div>
            <div id="key51" className="key"><span className="shift char">#</span><span className="unshift char">3</span></div>
            <div id="key52" className="key"><span className="shift char">$</span><span className="unshift char">4</span></div>
            <div id="key53" className="key"><span className="shift char">%</span><span className="unshift char">5</span></div>
            <div id="key54" className="key"><span className="shift char">^</span><span className="unshift char">6</span></div>
            <div id="key55" className="key"><span className="shift char">&</span><span className="unshift char">7</span></div>
            <div id="key56" className="key"><span className="shift char">*</span><span className="unshift char">8</span></div>
            <div id="key57" className="key"><span className="shift char">(</span><span className="unshift char">9</span></div>
            <div id="key48" className="key"><span className="shift char">)</span><span className="unshift char">0</span></div>
            <div id="key189" className="key"><span className="shift char">_</span><span className="unshift char">-</span></div>
            <div id="key187" className="key"><span className="shift char">+</span><span className="unshift char">=</span></div>
            <div id="key8" className="key right delete"><span className="nonchar">delete</span></div>
          </div>
          <div className="keyboardRow">
            <div id="key9" className="key left tab"><span className="nonchar">tab</span></div>
            <div id="key81" className="key"><span className="singleLetter">Q</span></div>
            <div id="key87" className="key"><span className="singleLetter">W</span></div>
            <div id="key69" className="key"><span className="singleLetter">E</span></div>
            <div id="key82" className="key"><span className="singleLetter">R</span></div>
            <div id="key84" className="key"><span className="singleLetter">T</span></div>
            <div id="key89" className="key"><span className="singleLetter">Y</span></div>
            <div id="key85" className="key"><span className="singleLetter">U</span></div>
            <div id="key73" className="key"><span className="singleLetter">I</span></div>
            <div id="key79" className="key"><span className="singleLetter">O</span></div>
            <div id="key80" className="key"><span className="singleLetter">P</span></div>
            <div id="key219" className="key"><span className="shift char">&#123;</span><span className="unshift char">[</span></div>
            <div id="key221" className="key"><span className="shift char">}</span><span className="unshift char">]</span></div>
            <div id="key220" className="key"><span className="shift char">|</span><span className="unshift char">\</span></div>
          </div>
          <div className="keyboardRow">
            <div id="key20" className="key left capslock"><span className="nonchar">caps lock</span></div>
            <div id="key65" className="key"><span className="singleLetter">A</span></div>
            <div id="key83" className="key"><span className="singleLetter">S</span></div>
            <div id="key68" className="key"><span className="singleLetter">D</span></div>
            <div id="key70" className="key"><span className="singleLetter">F</span></div>
            <div id="key71" className="key"><span className="singleLetter">G</span></div>
            <div id="key72" className="key"><span className="singleLetter">H</span></div>
            <div id="key74" className="key"><span className="singleLetter">J</span></div>
            <div id="key75" className="key"><span className="singleLetter">K</span></div>
            <div id="key76" className="key"><span className="singleLetter">L</span></div>
            <div id="key186" className="key"><span className="shift char">:</span><span className="unshift char">;</span></div>
            <div id="key222" className="key"><span className="shift char">"</span><span className="unshift char">'</span></div>
            <div id="key13" className="key right return"><span className="nonchar">return</span></div>
          </div>
          <div className="keyboardRow">
            <div id="key16Left" className="key left shiftkey"><span className="nonchar">shift</span></div>
            <div id="key90" className="key"><span className="singleLetter">Z</span></div>
            <div id="key88" className="key"><span className="singleLetter">X</span></div>
            <div id="key67" className="key"><span className="singleLetter">C</span></div>
            <div id="key86" className="key"><span className="singleLetter">V</span></div>
            <div id="key66" className="key"><span className="singleLetter">B</span></div>
            <div id="key78" className="key"><span className="singleLetter">N</span></div>
            <div id="key77" className="key"><span className="singleLetter">M</span></div>
            <div id="key188" className="key"><span className="shift char">&#60;</span><span className="unshift char">,</span></div>
            <div id="key190" className="key"><span className="shift char">></span><span className="unshift char">.</span></div>
            <div id="key191" className="key"><span className="shift char">?</span><span className="unshift char">/</span></div>
            <div id="key16Right" className="key right shiftkey"><span className="nonchar">shift</span></div>
          </div>
          <div className="keyboardRow last">
            <div id="fn" className="key left fn"><span className="nonchar">fn</span></div>
            <div id="key17" className="key left control"><span className="nonchar">control</span></div>
            <div id="key18Left" className="key left option"><span className="nonchar">option</span></div>
            <div id="key91" className="key left command"><span className="nonchar">command</span></div>
            <div id="key32" className="key space"><span className="nonchar">spacebar</span></div>
            <div id="key93" className="key right command"><span className="nonchar">command</span></div>
            <div id="key18Right" className="key right option"><span className="nonchar">option</span></div>
            <div className="key dpad"><span id="key37" className="nonchar dpadButton dpadleft">&#9668</span></div>
            <div className="key dpad"><span id="key38" className="nonchar dpadButton dpadup">&#9650</span><span id="key40" className="nonchar dpadButton dpaddown">&#9660</span></div>
            <div className="key dpad"><span id="key39" className="nonchar dpadButton dpadright">&#9658</span></div>
          </div>
        </div>
      </div>
    );
  }

  displayKeyCode(ev, key) {
    'use strict';
    var keyCodeField = document.getElementById('keyCodeField'),
      keyField = document.getElementById('keyField');
    if (ev && key) {
      keyCodeField.innerHTML = ev.which;
      if (ev.which >= 37 && ev.which <= 40) {
        var tempSpan = document.createElement('span');
        tempSpan.appendChild(key.cloneNode('deep'));
        keyField.innerHTML = tempSpan.innerHTML;
      } else {
        keyField.innerHTML = key.innerHTML;
      }
    }
  }

  keyPressed(ev) {
    'use strict';
    var keyCode,
      key;
    if (ev && ev.which) {
      keyCode = ev.which;
      if (keyCode === 16 || keyCode === 18) {
        if (ev.keyLocation === 1) {
          keyCode += 'Left';
        } else {
          keyCode += 'Right';
        }
      }
    }
    key = document.getElementById('key' + keyCode);
    if (key) {
      key.classList.add('keydown');
      if (keyCode === 20) {
        key.classList.add('on');
      }
    }
    this.displayKeyCode(ev, key);
  }

  keyReleased(ev) {
    'use strict';
    var keyCode,
      key;
    if (ev && ev.which) {
      keyCode = ev.which;
      if (keyCode === 16 || keyCode === 18) {
        if (ev.keyLocation === 1) {
          keyCode += 'Left';
        } else {
          keyCode += 'Right';
        }
      }
    }
    key = document.getElementById('key' + keyCode);
    if (key) {
      key.classList.remove('keydown');
      if (keyCode === 20) {
        key.classList.remove('on');
      }
    }
  }

  codeOnClick(keyTarget) {
    'use strict';
    var keyCodeField = document.getElementById('keyCodeField'),
      keyField = document.getElementById('keyField'),
      keyParent,
      keyTitle,
      keyCode,
      keyClone,
      fakeParent,
      key;
    if (keyTarget) {
      key = keyTarget.target;
      if (key.id.substr(0, 3) === 'key' && key.tagName === 'SPAN') {
        keyClone = key.cloneNode('deep');
        fakeParent = document.createElement('div');
        fakeParent.appendChild(keyClone);
        keyCode = key.id.substr(3);
        keyTitle = fakeParent.innerHTML;
      } else {
        if (key.classList.contains('key')) {
          keyCode = key.id.substr(3);
          keyTitle = key.innerHTML;
        } else {
          keyParent = key.parentElement;
          keyCode = keyParent.id.substr(3);
          keyTitle = keyParent.innerHTML;
        }
        if (keyCode[keyCode.length - 1] === 't') {
          keyCode = keyCode.substr(0, 2);
        }
      }
      keyCodeField.innerHTML = keyCode;
      keyField.innerHTML = keyTitle;
    }
  }

  listenClickKey() {
    'use strict';
    var keys = document.getElementsByClassName('key'),
      length = keys.length,
      i;
    if (keys) {
      for (i = 0; i < length; i++) {
        keys[i].addEventListener('click', () => { this.codeOnClick(); });
      }
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', (ev) => {
      this.keyPressed(ev);
    });
    window.addEventListener('keyup', (ev) => {
      this.keyReleased(ev);
    });
    this.listenClickKey();
  }
}