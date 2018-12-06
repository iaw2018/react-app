import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import {loadPlayers} from './PlayersTable/actions';
import './index.css';
import * as serviceWorker from './serviceWorker';


store.dispatch(loadPlayers());
ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider> ,
  document.getElementById('root')
);

serviceWorker.unregister();
