import React from 'react';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';

import styles from './TestPage.scss';

export default function TestPage() {
  return (
    <div className={styles.reactParagraph}>
      <p>This is the test page!</p>
      <Link to="/"><Button>Home Page</Button></Link>
    </div>
  );
}
