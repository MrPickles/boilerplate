import { connect } from 'react-redux';

import { testAction, PING } from '../actions';
import IndexPage from '../components/IndexPage';

const mapStateToProps = state => ({
  amount: state.testReducer.amount,
  pinging: state.pingReducer.pinging,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(testAction(1));
  },
  onPing: () => {
    dispatch({ type: PING });
  },
});

const IndexPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexPage);

export default IndexPageContainer;
