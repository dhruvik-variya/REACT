import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { roomReducer } from './reducers/roomReducer';
import { reservationReducer } from './reducers/reservationReducer';

const rootReducer = combineReducers({
  rooms: roomReducer,
  reservations: reservationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
