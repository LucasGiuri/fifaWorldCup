import {
  SET_ROUND_OF_16,
  SET_ROUND_OF_8,
  SET_SEMIFINALS,
  SET_FINALS,
  SET_MATCH_RESULT,
  SET_ROUND_MATCHES
} from './action-types';

export const initialState = {
  r1: [],
  r2: [],
  r3: [],
  r4: []
};

function getNextRound(round) {
  switch (round) {
    case 'r1':
      return 'r2';
    case 'r2':
      return 'r3';
    case 'r2':
      return 'r3';
    case 'r3':
      return 'r4';
    default:
      return '-';
  }
}

function setRound(newState, action, teamWinner) {
  const { matchId, round } = action;
  const id = parseInt(matchId);
  const position = id % 2;
  const key = Math.ceil(id / 2) - 1;
  newState[key].teams[position].id = teamWinner && teamWinner.id || '-';
  newState[key].teams[position].country = teamWinner && teamWinner.country || '-';
  return [...newState];
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_ROUND_OF_16:
      return {
        ...state,
        r1: [...state.r1, ...action.payload],
      };
    case SET_ROUND_OF_8:
      return {
        ...state,
        r2: [...state.r2, ...action.payload],
      };
    case SET_SEMIFINALS:
      return {
        ...state,
        r3: [...state.r3, ...action.payload],
      };
    case SET_FINALS:
      return {
        ...state,
        r4: [...state.r4, ...action.payload],
      };
    case SET_MATCH_RESULT:
      return {
        ...state,
        [action.round]: [...state[action.round].map((match) => {
          if (match.matchId === action.matchId) {
            match.teams[0].goals = action.firstTeamGoals;
            match.teams[0].penalties = action.firstTeamPenalties;
            match.teams[1].goals = action.secondTeamGoals;
            match.teams[1].penalties = action.secondTeamPenalties;
          }
          return match;
        })]
      };
    case SET_ROUND_MATCHES:
      const newRound = getNextRound(action.round);
      if (newRound === '-') return { ...state };
      const id = parseInt(action.matchId);
      const position = id % 2;
      const key = Math.ceil(id / 2);
      const teamsKey = position == 0 ? 1 : 0;
      const teamWinner = { id: action.winner && action.winner.id || '-', country: action.winner && action.winner.country || '-' };

      return {
        ...state,
        [newRound]: [...state[newRound].map(({ ...match }) => {
          if (parseInt(match.matchId) === key) {
            const teamsSaved = match.teams;
            match.teams = [];
            match.teams[position] = teamWinner|| teamsSaved[position];
            match.teams[teamsKey] = teamsSaved[teamsKey];
          }
          return match;
        })]
      }
    default:
      return state;
  }
};
