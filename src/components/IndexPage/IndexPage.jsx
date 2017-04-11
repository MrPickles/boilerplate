import React from 'react';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import styles from './IndexPage.scss';

const IndexPage = (props) => {
  return (
    <div className={styles.reactParagraph}>
      <p>This is the index page.</p>
      <Link to="/test"><Button>Test Page</Button></Link>
      <Button onClick={props.onClick}>Click me!</Button>
      <p>Counter: {props.amount}</p>
      <Button onClick={props.onPing}>Ping me!</Button>
      <p>Pinging: {String(props.pinging)}</p>
    </div>
  );
}

IndexPage.proptypes = {
  onClick: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
}

export default IndexPage;
