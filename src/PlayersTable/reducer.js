import {FETCH_PLAYERS} from './constants';
import getAge from 'get-age';

const formatPlayers=(players)=>{
	return players.map(player=> {
		return{
			name:player.name,
			position:player.position,
			team:player.nationality,
			age:getAge(player.dateOfBirth)
		};
	});
}
const players = (state =[],action) =>{
	switch(action.type){
		case FETCH_PLAYERS: 
			return formatPlayers(action.players);
		default:
			return state;
	}
};
export default players;