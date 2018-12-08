import {createSelector} from 'reselect';
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
const selectedPlayer= (player,{name,position,age})=>{
	return 	selectedName(player.name,name) 
			&& selectedPosition(player.position,position)
			&& selectedAge(player.age,age);
};
const getPlayers= (players,filters) =>{
	return players.filter(player => {
		return selectedPlayer(player,filters);
	});
};
export default createSelector(
	playerSelector, 	//a piece of state
	filtersSelector, 	//a piece of state
	getPlayers			//function
);

