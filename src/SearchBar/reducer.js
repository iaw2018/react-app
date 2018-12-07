import * as constants from './constants';
const {DO_SEARCH,DEFAULTS_FILTERS} = constants;

const checkFilters= filters=>{
	return filters;
}
const filters = (state =DEFAULTS_FILTERS,action) =>{
	switch(action.type){
		case DO_SEARCH: 	return checkFilters(action.filters);
		default:break;
	}
	return state;
};
export default filters;