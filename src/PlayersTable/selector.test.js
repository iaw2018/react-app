import {getPlayers} from './selector';
import {DEFAULTS_FILTERS} from '../SearchBar'

const player1 ={"name":"Romelu Lukaku", "position":"Centre-Forward", "team": "Belgium", "age":25};
const player2={"name":"David de Gea", "position":"Keeper", "team": "Spain", "age":28};
const player3={"name":"Daley Blind", "position":"Left-Back", "team": "Netherlands", "age":28};
const players=[player1,player2,player3];

//describe('Selector',() => {
	it('select all players with default filters',() => {
		expect(getPlayers(players,DEFAULTS_FILTERS)).toEqual(players);
	});
	it('no players with 23 years',() => {
		expect(getPlayers(players,{age:23}).length).toBe(0);
	});
	it('two players with 28 years',() => {
		expect(getPlayers(players,{age:28}).length).toBe(2);
		expect(getPlayers(players,{age:28})).toEqual([player2,player3]);
	});
	it('only one player with 25 years',() => {
		expect(getPlayers(players,{age:25}).length).toBe(1);
		expect(getPlayers(players,{age:25})).toEqual([player1]);
	});
	it('only one player with Keeper position',() => {
		expect(getPlayers(players,{position:"Keeper"})).toEqual([player2]);
	});
	it('two players have a name that contains the string "da"',() => {
		expect(getPlayers(players,{name:"da"}).length).toBe(2);
		expect(getPlayers(players,{name:"da"})).toEqual([player2,player3]);
	});
	it('only player2 has a name with the string \'da\'  and Keeper\'s position',() => {
		expect(getPlayers(players,{name:"da",position:"Keeper"}).length).toBe(1);
		expect(getPlayers(players,{name:"da",position:"Keeper"})).toEqual([player2]);
	});
//});