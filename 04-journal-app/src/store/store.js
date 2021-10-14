import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/noteReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnchancers = (typeof window !== "undefined" &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});





//Middleware necesario para trabajar con acciones asíncronas en la app.

export const store = createStore(
    reducers,
    composeEnchancers(
        applyMiddleware(thunk)
    )
);