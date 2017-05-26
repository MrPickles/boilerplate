# Boilerplate App - Containers

This directory contains all [container components][containers]. Unlike normal
components, these components handle logic pertaining to data, rather than the
actual UI. These components should be a wrapper over normal components and pass
props to the components they wrap.

To add a new container, create a new subdirectory that has the name of the
desired component. The `default` export of that file should be the container
component. The `index.js` file mounted at this directory will find all `js` or
`jsx` files, take their `default` exports, and export the containers as named
exports.

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

[containers]: <http://redux.js.org/docs/basics/UsageWithReact.html>
