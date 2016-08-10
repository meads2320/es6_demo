import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({ 
    courses //es6 shorthand property names 
});

export default rootReducer;