import { EPIC_END } from 'redux-observable';

import { PING, PONG } from 'actions';

const pingReducer = (state = { pinging: false }, action) => {
  switch (action.type) {
    case PING:
      return Object.assign({}, state, {
        pinging: true,
      });
    case PONG:
      return Object.assign({}, state, {
        pinging: false,
      });
    case EPIC_END:
    default:
      return state;
  }
};

export default pingReducer;
