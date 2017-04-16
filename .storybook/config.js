import { configure } from '@kadira/storybook';

const req = require.context('components', true, /.stories.jsx?$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
