# Boilerplate App - Actions

This directory contains all of the [Redux Actions][actions]. To add additional
actions or constants, simply create a new file or add new exports to existing
files. The `index.js` file will aggregate them all and export them all together.

```javascript
export const TEST_ACTION = 'TEST_ACTION';
```

To use these actions, import the `actions` module. It should contain all the
exports mounted at this directory.

```javascript
import { TEST_ACTION } from 'actions';
```

[actions]: <http://redux.js.org/docs/basics/Actions.html>
