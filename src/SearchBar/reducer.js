import * as constants from './constants';
const {NEW_NAME, NEW_POSITION,NEW_AGE,DO_SEARCH} = constants;

const initialState={
	name:"",
	position:"Position",
	age:""
};
const checkFilters= filters=>{
	console.log(filters);
	return filters;
}
const doNewName= (state,value) =>{
	
	console.log("estado",{
		...state,
		name:value
	});
	return{
		...state,
		name:value
	};
}
const doNewPosition= (state,value) =>{
	return{
		...state,
		position:value
	};
}
const doNewAge= (state,value) =>{
	return{
		...state,
		age:value
	};
}

const filters = (state =initialState,action) =>{
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