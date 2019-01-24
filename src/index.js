import React from 'react';
import ReactDOM from 'react-dom';
import './default.css';
import Index from './pages/index/Index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.register();
