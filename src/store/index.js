import { Reducers } from '../reducers';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

export const Store = createStore(Reducers, applyMiddleware(thunk))