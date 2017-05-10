# Boilerplate

[![Build Status][travis_svg]][travis_url]

This is a boilerplate for React apps. It uses [React][react] and [Redux][redux]
with [Redux Observables][observable] on the client side and is
[Express][express] on the server. The application is built using
[Webpack][webpack], and it has [Hot Module Replacement][hmr] to allow changes
without refreshing in development. For styling, the app uses
[CSS Modules][modules] with [Sass][sass].

## Usage

First off, clone the repository.

```bash
git clone https://github.com/MrPickles/boilerplate
cd boilerplate/
npm install
```

You then want to configure environment variables for the app. The app uses
[dotenv][dotenv] to set up environment variables, so you should put any
environment variables needed at runtime in the `.env` file. There is a
`.env.example` file provided for guidance.

```bash
cp .env.example .env
```

### Running a production build

To run the server in production, you'll want to build the bundled JavaScript and
CSS that will be used in the client. Then you can start the server. There is a
`build` and `prod` script to build the app and start the server in production,
respectively. Alternatively, you can just run `npm start`.

```bash
npm run build
npm run prod
# or
npm start
```

### Running a development build

When developing, there is a development build that has development-specific
advantages over the production build, such as automatic module replacement,
server restarting, and source maps for debugging. To use the development build,
run the `webpack` script in the background or in a separate terminal to have
Webpack compile the development build and watch for any changes in the code.
The assets will be served by [webpack-dev-server][webpack-dev-server].
Then run the development server.

```bash
npm run webpack # run this in the background or in a separate terminal
npm run dev
```

### Linting and Testing

This repository uses [ESLint][eslint] and [Mocha][mocha] for linting and
testing, respectively. To lint the code base, simply run the `lint` script. You
can change the lint rules in `.eslintrc.json` based on your style preferences.

```bash
npm run lint
```

All tests must have `.spec.js` as its file extension. The testing script will
search for all files with this extension and treat them as tests.

```bash
npm run test
```

[travis_svg]: <https://travis-ci.com/MrPickles/boilerplate.svg?token=HL4GfADW1tek1pK4Skh9&branch=master>
[travis_url]: <https://travis-ci.com/MrPickles/boilerplate>
[react]: <https://facebook.github.io/react/>
[redux]: <http://redux.js.org/>
[observable]: <https://redux-observable.js.org/>
[express]: <https://expressjs.com/>
[webpack]: <https://webpack.js.org/>
[hmr]: <https://webpack.github.io/docs/hot-module-replacement.html>
[modules]: <https://github.com/css-modules/css-modules>
[sass]: <http://sass-lang.com/>
[dotenv]: <https://github.com/motdotla/dotenv>
[eslint]: <http://eslint.org/>
[mocha]: <https://mochajs.org/>
[webpack-dev-server]: <https://github.com/webpack/webpack-dev-server>
