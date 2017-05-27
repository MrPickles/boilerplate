import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { testAction, PING } from 'actions';
import { IndexPage } from 'components';

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

const IndexPageContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexPage));

export default IndexPageContainer;
