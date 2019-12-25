import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/js/rem.js'
import './assets/style/base.scss'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
