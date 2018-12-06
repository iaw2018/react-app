import {FETCH_PLAYERS} from './constants';


const isFetchProducts= action=>{
	return action.type===FETCH_PLAYERS;
}
const formatPlayers(players){
	return players; // TODO: transform  age and delete additional information
}
const players = (state =[],action) =>{
	switch(action.type){
		case FETCH_PLAYERS: return formatPlayers(action.players);
	}
	return state;
};
export default players;