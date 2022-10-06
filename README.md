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

## How to make a release

1.  Pull the `next-release` branch to make sure you have all the latest code on your local machine.
2.  Make a new branch, starting from `next-release` and give it the name of the next version you want to release (`release/new.version.number`).
3.  Bump the version in `package.json` and commit with message `Version bump` and push.
4.  Update `CHANGELOG.md`

    - Replace `[unreleased]` with the `[new.version.number]` and add the release `date next to it, like this`- yyyy-mm-dd`.
    - Clean up the unused titles.
    - Prepare for next release by adding the following content on top of the file:

      ```
      ## [unreleased]

      ### Added

      ### Changed

      ### Deprecated

      ### Removed

      ### Fixed

      ### Dependency updates
      ```

    - Commit with message `Update changelog` and push.

5.  Make a `pull request` on Github where you add the `changelog items` as the description and wait for approval.
6.  Make a `draft release` on Github and fill in the following fields:
    - **Tag version:** `new.version.number` @ `target: next-release`
    - **Release title:** `new.version.number`
    - **Description:** add the `changelog items`
7.  Once the pull request has the needed amount of approvals, merge it into the `next-release` branch.
8.  `Publish` the earlier created `draft release` on Github.
9.  In your `console`, pull the `next-release` branch.
10. `Publish` to `npm` using the `npm publish --access=public` command.
11. `Merge` the `next-release` branch into `master` and push to Github

## License

This project is licensed under the terms of the [MIT license](https://github.com/teamleadercrm/ui/blob/master/LICENSE).
