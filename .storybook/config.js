import { configure, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

const req = require.context('components', true, /.stories.jsx?$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

addDecorator(withKnobs);
configure(loadStories, module);
