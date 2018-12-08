import {DO_SEARCH} from './constants';
const getFilterFromValues= values=>{
	let filters={};
	if(values.age) 		filters.age=Number(values.age);
	if(values.position)	filters.position=values.position;
	if(values.name)		filters.name=values.name;
	return filters;
}
const doSearch= values =>{
	return {
      type: DO_SEARCH,
      filters: getFilterFromValues(values)
    };
};
export{doSearch};
