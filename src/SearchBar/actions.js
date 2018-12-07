import * as constants from './constants';
const {NEW_NAME, NEW_POSITION,NEW_AGE,DO_SEARCH} = constants;

const doSearch= filters =>{
	return {
      type: DO_SEARCH,
      filters
    };
};
const updateFilter= (type,event)=>{
	const value= event.target.value;
	return {
      type,
      value
    };
};
//Update the Name's Filter
const doNewName= event =>{
	return updateFilter(NEW_NAME,event);
};
//Update the Position's Filter
const doNewPosition= event =>{
	return updateFilter(NEW_POSITION,event);
};
//Update the Age's Filter 
const doNewAge= event =>{
	return updateFilter(NEW_AGE,event);
};

//Exported actions
export{ doSearch,doNewName,doNewPosition,doNewAge};
