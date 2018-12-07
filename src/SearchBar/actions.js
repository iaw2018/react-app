import * as constants from './constants';
const {DO_SEARCH} = constants;
const getValues= values=>{
	let filters={};
	if(values.age)
		filters.age=Number(values.age);
	if(values.position)
		filters.position=values.position;
	if(values.name)
		filters.name=values.name;
	return filters;
}
const doSearch= values =>{
	let filters=getValues(values);
	return {
      type: DO_SEARCH,
      filters
    };
};
//Exported actions
export{ doSearch};
