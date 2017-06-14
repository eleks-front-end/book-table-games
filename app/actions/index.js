import { GET_TENNIS_GAMES_SUCCESS } from 'consts';

export const getTennisGames = games => ({
    type: GET_TENNIS_GAMES_SUCCESS,
    games
});
