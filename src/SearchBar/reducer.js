import * as constants from './constants';
const {NEW_NAME, NEW_POSITION,NEW_AGE,DO_SEARCH,DEFAULTS_FILTERS,DEFAULT_AGE} = constants;

const checkFilters= filters=>{
	return filters;
}
const doNewName= (state,value) =>{
	return {...state, name:value };
}
const doNewPosition= (state,value) =>{
	return {...state,position:value };
}
const calculateAgeValue= value=>{
	if(value!=="")
		return parseInt(value);
	return DEFAULT_AGE;
};

const doNewAge= (state,value) =>{
	return{	...state, age: calculateAgeValue(value)};
}

const filters = (state =DEFAULTS_FILTERS,action) =>{
	switch(action.type){
		case NEW_NAME: 		return doNewName(state,action.value);
		case NEW_POSITION: 	return doNewPosition(state,action.value); 
		case NEW_AGE: 		return doNewAge(state,action.value); 	
		case DO_SEARCH: 	return checkFilters(state,action.filters);
		default:break;
	}
	return state;
};
export default filters;