import {loadPlayers} from './actions';
import {PLAYERS_URL,FETCH_PLAYERS} from './constants';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';


const mockStore=configureStore([thunk]);
beforeEach(()=>moxios.install());
afterEach(()=>moxios.uninstall());

it('load Players',()=>{
	moxios.stubRequest(PLAYERS_URL,{
		status:200,
		response:[ 
		{	"contractUntil" : "2022-06-30", "dateOfBirth" : "1993-05-13", "jerseyNumber" : 9, 
			"name" : "Romelu Lukaku","nationality" : "Belgium", "position" : "Centre-Forward"	}, 
		{  "contractUntil" : "2019-06-30", "dateOfBirth" : "1990-11-07",  "jerseyNumber" : 1,
  			"name" : "David de Gea", "nationality" : "Spain",  "position" : "Keeper"			}, 
  		{  "contractUntil" : "2021-06-30",  "dateOfBirth" : "1987-02-22",  "jerseyNumber" : 20,
  			"name" : "Sergio Romero",  "nationality" : "Argentina",  "position" : "Keeper"		},
		]
	});
	return store.dispatch(loadPlayers())
		.then( ()=>{
			const actions= store.getActions();
			expect(actions.length).toBe(1);
			expect(actions[0].type).toBe(FETCH_PLAYERS);
			expect(actions[0].players).not.toBeNull();
			expect(actions[0].players.length).toBe(3);
		});
});