import React from 'react';
import {shallow,render,configure} from 'enzyme'; 
import {PlayersTable} from './index';
import ConnectedPlayersTable from './index';
//mport {ROW_CLASS} from './constants'
import {DEFAULTS_FILTERS} from '../SearchBar'
import Adapter from 'enzyme-adapter-react-15';
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

it('renders no players when selector\'s result is empty', () => {
	const wrapper= shallow(<PlayersTable players={[]} />);
	expect(wrapper.find(".rt-tr-group").length).toBe(0);
 });

const mockStore=configureStore();

it('renders no players in the connected element when selector\'s result is empty', () => {
	const store= mockStore({players:[]})
	const wrapper= render(<ConnectedPlayersTable store={store} />);
	expect(wrapper.find(".rt-tr-group").length).toBe(0);
 });

 it('renders players', () => {
	const store= mockStore({players:[{
		"name":"Romelu Lukaku",
		"position":"Centre-Forward",
		"team": "Belgium",
		"age":25
	}],filters:{DEFAULTS_FILTERS}})
	const wrapper= render(<ConnectedPlayersTable store={store} />);
	expect(wrapper.find(".rt-tr-group").length).toBe(1);
 });
