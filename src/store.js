import { createStore ,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import players from './PlayersTable/reducer';
import filters from './SearchBar/reducer';
import { reducer as formReducer } from 'redux-form'

export default createStore(combineReducers({players,filters,form:formReducer}) ,applyMiddleware(thunk));