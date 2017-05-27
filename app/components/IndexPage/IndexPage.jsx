import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';

import styles from './IndexPage.scss';

class IndexPage extends React.Component {

  componentDidMount() {
    // This is just included as an example for testing.
  }

  render() {
    return (
      <div className={styles.reactParagraph}>
        <p>This is the index page.</p>
        <Link to="/test"><Button>Test Page</Button></Link>
        <Button onClick={this.props.onClick}>Click me!</Button>
        <p>Counter: {this.props.amount}</p>
        <Button onClick={this.props.onPing}>Ping me!</Button>
        <p>Pinging: {String(this.props.pinging)}</p>
      </div>
    );
  }
}

IndexPage.propTypes = {
  onClick: PropTypes.func,
  onPing: PropTypes.func,
  amount: PropTypes.number,
  pinging: PropTypes.bool,
};

export default IndexPage;
