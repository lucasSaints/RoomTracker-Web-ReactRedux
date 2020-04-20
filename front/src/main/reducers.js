import { combineReducers } from 'redux';
import mainReducer from '../pages/mainReducer';
import logReducer from '../pages/logReducer';

const rootReducer = combineReducers({
    main: mainReducer,
    log: logReducer
})

export default rootReducer