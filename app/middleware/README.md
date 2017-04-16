# Boilerplate App - Middleware

This directory contains any [middleware][middleware] for Redux. By default, it
already has logging middleware and the middleware for epics. To add additional
middleware, create a new file with the middleware, and make it the `default`
export of the file. The `index.js` file will find all of the `default` exports
and aggregate them together. The list of middlewares will then be exported to
the creation of the Redux store.

[middleware]: <http://redux.js.org/docs/advanced/Middleware.html>
