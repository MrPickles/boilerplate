# Boilerplate App - Containers

This directory contains all [container components][containers]. Unlike normal
components, these components handle logic pertaining to data, rather than the
actual UI. These components should be a wrapper over normal components and pass
props to the components they wrap.

To add a new container, create a new subdirectory that has the name of the
desired component and contains an `index.js` file. The `default` export of that
file should be the container component. The `index.js` file mounted at this
directory will find all other `index.js` files, take their `default` exports,
and export the containers as named exports.

Based off stylistic preferences, it may be desireable to make a separate `.jsx`
file containing the actual container and just make `index.js` forward the export
of the `jsx` file. For example, if you wanted a container called
`TestContainer`, in the `TestContainer` directory, there would be
`TestContainer.jsx` that contained and exported the actual container. The
`index.js` would forward the export as shown below.

```javascript
import TestContainer from './TestContainer';

export default TestContainer;
```

When implementing containers, there should be no additional UI logic. All the
container should do is hook up the component to Redux by implementing
`mapStateToProps` and `mapDispatchToProps` and running `connect` to forward the
props. Hence a typical container should look something like the snippet below.

```javascript
import { connect } from 'react-redux';

import { HostComponent } from 'components';

/* Implement mapStateToProps and mapDispatchToProps here. */

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostComponent);

export default TestContainer;
```

It may also be a good idea to make container names end with "Container" to
prevent any confusion with normal components.

Due to the way `index.js` exports all containers, you can import containers as a
named import from `containers`.

```javascript
import { TestContainer } from 'containers';
```

[containers]: <http://redux.js.org/docs/basics/UsageWithReact.html>
