import { guildKillboardReducer } from './guildKillboardReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    guildKillboardReducer: guildKillboardReducer,
});