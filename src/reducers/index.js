import calculatorReducer from './calculatorReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  calculatorReducer,
});

export default rootReducer;
