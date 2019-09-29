// index.js

import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/order/App'

import * as serviceWorker from './serviceWorker';

    
    ReactDOM.render(
     <App /> 
    ,document.getElementById('root'));

serviceWorker.unregister();
