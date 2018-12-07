import {createSelector} from 'reselect';
import  _ from 'lodash'
import {DEFAULTS_FILTERS} from '../SearchBar'



const playerSelector= state => state.players;
const filtersSelector= state=>state.filters;

const sameName= (player,filterName)=>{
	return player.toLowerCase().includes(filterName.toLowerCase());
}
const selectedName= (player,filterName)=>{
	return (filterName===DEFAULTS_FILTERS.name) || sameName(player,filterName);
};
const selectedPosition= (player,filterPosition)=>{
	return (filterPosition===DEFAULTS_FILTERS.position) || (player===filterPosition);
};
const selectedAge= (player,filterAge)=>{
	return (filterAge===DEFAULTS_FILTERS.age) || (player===filterAge);
}
const selectedPlayer= (player,filters)=>{
	return 	selectedName(player.name,filters.name) 
			&& selectedPosition(player.position,filters.position)
			&& selectedAge(player.age,filters.age);
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

