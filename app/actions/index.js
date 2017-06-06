import { GET_TENNIS_GAMES_SUCCESS } from '../constants';

export const getTennisGames = games => ({
    type: GET_TENNIS_GAMES_SUCCESS,
    games
});
