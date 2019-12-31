import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/js/rem.js'
import './assets/style/base.scss'
import axios from 'axios'
import * as serviceWorker from './serviceWorker';

import { EventEmitter } from 'events'
const eventbus = new EventEmitter();
React.Component.prototype.$eventbus = eventbus;

React.Component.prototype.$axios = axios;


React.Component.prototype.$baseurl = 'http://localhost:100';
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
