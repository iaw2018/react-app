import axios from 'axios';
import {PLAYERS_URL,FETCH_PLAYERS} from './constants';

const fetchProducts= players =>{
	return {
		type: FETCH_PLAYERS,
		players
	}
}
export const loadPlayers= ()=>{
	return dispatch =>{
		return axios.get(PLAYERS_URL)
		.then( response =>{dispatch(fetchProducts(response.data))});
	};
}