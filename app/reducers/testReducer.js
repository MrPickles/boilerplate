import { TEST_ACTION } from '../actions';

const testReducer = (state = { amount: 0 }, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return Object.assign({}, state, {
        amount: state.amount + action.amount,
      });
    default:
      return state;
  }
};

export default testReducer;
