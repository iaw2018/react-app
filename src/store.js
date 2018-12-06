import { createStore ,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import players from './PlayersTable/reducer';
import filters from './SearchBar/reducer';

export default createStore(combineReducers({players,filters}) ,applyMiddleware(thunk));