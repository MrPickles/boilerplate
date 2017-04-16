import { configure } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies

const req = require.context('components', true, /.stories.jsx?$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
