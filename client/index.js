import { render } from 'react-dom';
import React from 'react';
import App from 'client/app';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux'
import 'whatwg-fetch';

import { Provider } from 'react-redux';
import configureStore from 'client/store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store)
import 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.min.css';
import ErrorBoundary from './errorLogging'


render((
    <Provider store={store}>
        <Router history={history}>
        <ErrorBoundary>
            <App/>
            </ErrorBoundary>
        </Router>
    </Provider>
), document.getElementById('app'));
