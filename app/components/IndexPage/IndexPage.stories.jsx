import React from 'react';
import { storiesOf } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies

import IndexPage from './IndexPage';

const stories = storiesOf('IndexPage', module);

stories.add('default', () => (
  <IndexPage />
));

