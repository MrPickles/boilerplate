# Boilerplate App - Reducers

This directory contains all the [reducers][reducers] for the Redux store. To add
a new set of reducers, create a new file with the reducer logic that you would
like, and make it the `default` export. The name of the store will be set as the
name of the file, so if you name a file `testReducer.js`, the state controlled
in that file would be mounted in `state.testReducer`, assuming state contains
the entire Redux store. The `index.js` grabs all reducers and runs
`combineReducers` on them, based of the filename of the import.

[reducers]: <http://redux.js.org/docs/basics/Reducers.html>
