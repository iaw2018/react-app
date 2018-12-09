import React from 'react';
import App from './App';
import {shallow,render,configure} from 'enzyme'; 
import store from './store';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

it('shallows App without crashing', () => {
  shallow(<App />);
 });

 it('renders App without crashing', () => {
  render(
	<Provider store={store}>
  		<App />
  	</Provider>);
 });

