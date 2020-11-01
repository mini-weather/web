import { combineReducers } from 'redux';
import { currentReducer } from './current';

const rootReducer = combineReducers({
    current: currentReducer
});
export default rootReducer;