import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './pages/App';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import {Provider} from 'react-redux';

const middleware =applyMiddleware(logger);
const store = createStore(reducers,middleware);


ReactDOM.render(
	<Provider store={store}>
	  <App/>
	</Provider>,document.getElementById('root')
);


registerServiceWorker();
