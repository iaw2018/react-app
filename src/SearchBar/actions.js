import * as constants from './constants';
const {NEW_NAME, NEW_POSITION,NEW_AGE,DO_SEARCH} = constants;

const doSearch= filters =>{
	return {
      type: DO_SEARCH,
      filters
    };
};
const updateFilter= (type,event)=>{
	console.log(type,"=",event.target.value);

	const value= event.target.value;
	return {
      type,
      value
    };
};
const doNewName= event =>{
	return updateFilter(NEW_NAME,event);
};
const doNewPosition= event =>{
	return updateFilter(NEW_POSITION,event);
};
const doNewAge= event =>{
	return updateFilter(NEW_AGE,event);
};
export{ doSearch,doNewName,doNewPosition,doNewAge};
