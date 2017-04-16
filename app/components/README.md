# Boilerplate App - Components

This directory contains all [React Components][component] (without Redux logic).
All "dumb" components belong here; any components that contain logic beyond the
presentational level belong in the `containers/` directory.

To add a new component, create a new subdirectory that specifies the name of the
desired component, and include an `index.js` file in that directory. The new
component should be the `default` export of the `index.js` file mounted at the
component's folder. Based off stylistic preferences, it may be desireable to
make a separate `.jsx` file whose name matches the component name (and thus the
folder name) and just make `index.js` forward the export of the `jsx` file. For
example, if you wanted to make a component called `TestComponent`, in the
`TestComponent/` directory, there would be `TestComponent.jsx` that contained
and exported the actual component. The `index.js` file would just forward the
export.

```javascript
import TestComponent from './TestComponent';

export default TestComponent;
```

The `index.js` file mounted that this directory finds all subdirectories that
contain a file called `index.js` and exports the file's `default` export as a
named export. As a result, to import components in general, you can just import
from the `components` module.

```javascript
import { TestComponent } from 'components';
```

[component]: <https://facebook.github.io/react/docs/react-component.html>
