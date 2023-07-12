import { combineReducers } from 'redux';
import userReducer from './userReducer';
import urlReducer from './urlsReducer';

const rootReducer = combineReducers({
    user: userReducer,
    urls: urlReducer,
});

export default rootReducer;
