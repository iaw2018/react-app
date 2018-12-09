import players from './reducer';
import {FETCH_PLAYERS} from './constants';

const fetchedPlayer=[ {
  "contractUntil" : "2022-06-30",
  "dateOfBirth" : "1993-05-13",
  "jerseyNumber" : 9,
  "name" : "Romelu Lukaku",
  "nationality" : "Belgium",
  "position" : "Centre-Forward"
}];
const formattedPlayer=[{
	"name":"Romelu Lukaku",
	"position":"Centre-Forward",
	"team": "Belgium",
	"age":25
}];
const fetchPlayerAction={
		type: FETCH_PLAYERS,
		players:fetchedPlayer
};
//describe('players',() => {
	it('return the initial state',() => {
		expect(players(undefined,{})).toEqual([]);
	});
	it('receives a player',() => {
		expect(players([],fetchPlayerAction).length).toBe(1);
	});
	it('format a player',() => {
		expect(players([],fetchPlayerAction)).toEqual(formattedPlayer);
	});
	it('another action doesn\'t change the actual state',() => {
		expect(players(formattedPlayer,{type:"Another_Action"})).toEqual(formattedPlayer);
	});
//});


