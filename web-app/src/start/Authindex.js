import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/auth/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <App />
        , document.getElementById('root'));

serviceWorker.unregister();