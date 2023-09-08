# Teamleader UI

Teamleader UI is a set of [React](http://facebook.github.io/react/) components that implement the [Teamleader](https://www.teamleader.eu) design specification.

## Installation

Teamleader UI can be installed as an [npm package](https://www.npmjs.com/package/@teamleader/ui):

```bash
$ npm install --save @teamleader/ui
```

or

```bash
$ yarn install @teamleader/ui
```

## Basic usage

In this minimal example, we import a `Button` with styles already bundled:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@teamleader/ui';

ReactDOM.render(<Button label="Hello World!" />, document.getElementById('app'));
```

Import the CSS into your project via JS or CSS.

JS
```js
import '@teamleader/ui/es/index.css';
```

or CSS
```css
@import url('@teamleader/ui/es/index.css');
```

## Browser support

This library officially supports the last two versions of the major browsers. This is mainly because of dependencies and ease of mind.

- [Luxon browser support](https://moment.github.io/luxon/#/matrix)

## Contributing

To work in the project you will need a node version supporting ES6 syntax. Although the project is built using the Babel compiler, we use some ES6 features on the development server. Consider using [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm) to handle different node versions!

To start the spec site locally, follow these simple steps:

```bash
$ git clone https://github.com/teamleadercrm/ui
$ cd ui/
$ yarn install
$ yarn start
```

Open up a browser and the local spec will be available at [http://localhost:3000/](http://localhost:3000/).

To start the project on another port, set the `PORT` variable when running the `start` command.
As in this example for port `3001`:

```bash
$ PORT=3001 yarn start
```

## New component checklist

- component is written in Typescript
- [component].stories.tsx file is present
- component is exported in index.ts

## How we do a release

1.  Create PR with your desired changes
2.  Bump the version in `package.json` and commit with message `Version bump`. [Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning)
3.  Update `CHANGELOG.md`

    - Place `## [new.version.number] - yyy-mm-dd` above last release
    - Add heading that best fits your change:

      ```
      ### Added

      ### Changed

      ### Deprecated

      ### Removed

      ### Fixed

      ### Dependency updates
      ```

    - Add you change in format `Component: short-description ([github-username](link-to-github-user)) in [#PR-ID](link-to-PR)`
    - Commit with message `Update changelog` and push.
    - EXAMPLE:
      ```
      ## [16.4.3] - 2022-10-31
      ### Fixed
      - `Select`: Allow multiple selects being rendered at once ([@stefaandevylder](https://github.com/stefaandevylder)) in [#2422](https://github.com/teamleadercrm/ui/pull/2422)
      ```

4.  Once the pull request has the needed amount of approvals, merge it into the `next-release` branch.
5.  Github Actions will create a tag + release
6.  In your `console`, pull the `next-release` branch.
7.  `Publish` to `npm` using the `npm publish --access=public` command.
8.  `Merge` the `next-release` branch into `master` and push to Github

## License

This project is licensed under the terms of the [MIT license](https://github.com/teamleadercrm/ui/blob/master/LICENSE).
