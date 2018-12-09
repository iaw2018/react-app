import filters from './reducer';
import {DO_SEARCH,DEFAULTS_FILTERS} from './constants';

const filtersExample={
	age:22
};
const doSearchAction={
		type: DO_SEARCH,
		filters:filtersExample
};
//describe('Search Bar',() => {
	it('return the initial state',() => {
		expect(filters(undefined,{})).toEqual(DEFAULTS_FILTERS);
	});
	it('receives filters',() => {
		expect(filters(DEFAULTS_FILTERS,doSearchAction)).toEqual(filtersExample);
	});
	it('another action doesn\'t change the actual state',() => {
		expect(filters(filtersExample,{type:"Another_Action"})).toEqual(filtersExample);
	});
//});