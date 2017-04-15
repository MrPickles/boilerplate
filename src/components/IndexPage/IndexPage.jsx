import React from 'react';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';

import styles from './IndexPage.scss';

const IndexPage = props => (
  <div className={styles.reactParagraph}>
    <p>This is the index page.</p>
    <Link to="/test"><Button>Test Page</Button></Link>
    <Button onClick={props.onClick}>Click me!</Button>
    <p>Counter: {props.amount}</p>
    <Button onClick={props.onPing}>Ping me!</Button>
    <p>Pinging: {String(props.pinging)}</p>
  </div>
);

IndexPage.propTypes = {
  onClick: PropTypes.func.isRequired,
  onPing: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  pinging: PropTypes.bool.isRequired,
};

export default IndexPage;
