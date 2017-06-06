import { combineReducers } from 'redux';
import { GET_TENNIS_GAMES_SUCCESS } from '../constants';

function games (state, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function byId (state = {}, action) {
    switch (action.type) {
        case GET_TENNIS_GAMES_SUCCESS: {
            return {
                ...state,
                ...action.games.reduce((obj, game) => {
                    obj[game._id] = game;
                    return obj;
                }, {})
            };
        }
        default: {
            const { gameId } = action;
            if (gameId) {
                return {
                    ...state,
                    [gameId]: games(state[gameId], action)
                };
            }
            return state;
        }
    }
}

function visibleIds (state = [], action) {
    switch (action.type) {
        case GET_TENNIS_GAMES_SUCCESS:
            return action.games.map(game => game._id);
        default:
            return state;
    }
}

export default combineReducers({
    byId,
    visibleIds
});

export function getGame (state, id) {
    return state.byId[id];
}

export function getVisibleGames (state) {
    return state.visibleIds.map(id => getGame(state, id));
}
