import {doSearch} from './actions';
import {DO_SEARCH} from './constants';
import configureStore from 'redux-mock-store';

const players=[];
const filters={"age":22, "name":"nameExample"};
const mockStore=configureStore();
it('do Search for ages and position',()=>{
	const store= mockStore({players,filters});
	const values={"age":"28", "position":"Keeper"};
	store.dispatch(doSearch(values));
	const actions= store.getActions();

	expect(actions.length).toBe(1);
	expect(actions[0].type).toBe(DO_SEARCH);
	expect(actions[0].filters).not.toBeNull();
	expect(actions[0].filters.age).toBe(28);
	expect(actions[0].filters.position).toBe("Keeper");
});

it('do Search for name',()=>{
	const store= mockStore({players,filters});
	const values={"name":"Name L"};
	store.dispatch(doSearch(values));
	const actions= store.getActions();

	expect(actions.length).toBe(1);
	expect(actions[0].type).toBe(DO_SEARCH);
	expect(actions[0].filters).not.toBeNull();
	expect(actions[0].filters.name).toBe("Name L");
});