# Teamleader UI

Teamleader UI is a set of [React](http://facebook.github.io/react/) components that implement the [Teamleader](https://www.teamleader.eu) design specification.

## Installation

Teamleader UI can be installed as an [npm package](https://www.npmjs.com/package/teamleader-ui):

```bash
$ npm install --save @teamleader/ui
```

## Basic usage

In this minimal example, we import a `Button` with styles already bundled:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'teamleader-ui';

ReactDOM.render(
  <Button label="Hello World!" />,
  document.getElementById('app')
);
```

## Contributing

To work in the project you will need a node version supporting ES6 syntax. Although the project is built using the Babel compiler, we use some ES6 features on the development server. Consider using [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm) to handle different node versions!

To start the spec site locally, follow these simple steps:

```bash
$ git clone https://github.com/teamleadercrm/teamleader-ui
$ cd teamleader-ui/
$ npm i
$ npm start
```

Open up a browser and the local spec will be available at [http://localhost:3000/](http://localhost:3000/).



## License

This project is licensed under the terms of the [MIT license](https://github.com/teamleadercrm/teamleader-ui/blob/master/LICENSE).
