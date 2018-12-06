import {createSelector} from 'reselect';
import  _ from 'lodash'

const playerSelector= state => state.players;
const filtersSelector= state=>state.filters;
const validName= (player,filterName)=>{
	return (filterName===undefined) || (player===filterName);
};
const validPosition= (player,filterPosition)=>{
	return (filterName===undefined) || (player===filterName);
};

const validAge= (player,filterAge)=>{
	return (filterName===undefined) || (player===filterName);
}
const selectedPlayer= (player,filters)=>{
	return  validName(player.name,filters.name) 
			&& validPosition(player.position,filters.position)
			&& validAge(player.age,filters.age);
};
const getPlayers= (players,filters) =>{
	const selectedPlayers= _.filter(players,player => {
		return selectedPlayer(player,filters);
	});
	return selectedPlayers;
};
export default createSelector(
	playerSelector, 	//a piece of state
	filtersSelector, 	//a piece of state
	getPlayers			//function
);

