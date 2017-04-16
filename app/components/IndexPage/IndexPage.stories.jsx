import React from 'react';
import { storiesOf } from '@kadira/storybook';

import IndexPage from './IndexPage';

const stories = storiesOf('IndexPage', module);

stories.add('default', () => (
  <IndexPage />
));

