# Boilerplate App - Components

This directory contains all [React Components][component] (without Redux logic).
All "dumb" components belong here; any components that contain logic beyond the
presentational level belong in the `containers/` directory.

To add a new component, create a new `js` or `jsx` file that specifies the name
of the desired component. The new component should be the `default` export of
the file.

The `index.js` file mounted that this directory finds all `js` and `jsx files
and exports the files' `default` export as a named export. As a result, to
import components in general, you can just import from the `components` module.

```javascript
import { TestComponent } from 'components';
```

[component]: <https://facebook.github.io/react/docs/react-component.html>
