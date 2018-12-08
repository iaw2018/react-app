import {DO_SEARCH,DEFAULTS_FILTERS} from './constants';
const filters = (state =DEFAULTS_FILTERS,action) =>{
	switch(action.type){
		case DO_SEARCH: 	
			return action.filters;
		default:
			return state;
	}
};
export default filters;