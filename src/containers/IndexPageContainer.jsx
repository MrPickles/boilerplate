import { connect } from 'react-redux';

import { testAction } from '../actions';
import IndexPage from '../components/IndexPage/IndexPage';

const mapStateToProps = (state) => {
  return {
    amount: state.testReducer.amount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(testAction(1));
    },
  }
};

const IndexPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);

export default IndexPageContainer;
