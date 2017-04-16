# Boilerplate App - Epics

This directory holds all of the [Epics][epics] for Redux Observable. To add
additional Epics, create a new file with your new Epic and make it the default
export for the module. The `index.js` file will grab all `default` exports and
run `combineEpics` to register all of the epics. The directory structure beyond
this directory is flexible, since `index.js` will recursively grab everything
mounted in this subdirectory.

[epics]: <https://redux-observable.js.org/docs/basics/Epics.html>
