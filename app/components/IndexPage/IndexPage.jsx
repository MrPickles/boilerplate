import React from 'react';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';

import styles from './IndexPage.scss';

export default function IndexPage() {
  return (
    <div className={styles.reactParagraph}>
      <p>This is the index page.</p>
      <Link to="/test"><Button>Test Page</Button></Link>
    </div>
  );
}
