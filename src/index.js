import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import './index.less'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import 'antd/dist/antd.css'
import MapRoute from './routes/MapRoute'
import routes from './routes/router.config'
import axios from 'axios'
Component.prototype.$http = axios
ReactDOM.render((
    <Router>
        <MapRoute routes={routes}/>
    </Router>
), document.getElementById('root'));

