import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Home from './components/home';
import Work from './components/work';
import Resume from './components/resume';
import Contact from './components/contact';

import FourOhFour from './components/four_oh_four';

import Hueview from './components/work/hueview';
import Calendar from './components/work/calendar';
import Keycode from './components/work/keycode';
import ThatPurple from './components/work/that_purple';
import ColorSense from './components/work/colorsense';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="work/hueview" component={Hueview} />
      <Route path="work/calendar" component={Calendar} />
      <Route path="work/keycode" component={Keycode} />
      <Route path="work/that_purple" component={ThatPurple} />
      <Route path="work/colorsense" component={ColorSense} />
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="work" component={Work} />
        <Route path="contact" component={Contact} />
        <Route path="resume" component={Resume} />
        <Route path="*" component={FourOhFour} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-wrapper'));
