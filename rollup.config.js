import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';

import packageJSON from './package.json';

export default {
  input: './src/index.js',
  output: [
    {
      exports: 'named',
      file: packageJSON.main,
      format: 'cjs',
    },
    {
      file: packageJSON.module,
      format: 'esm',
    },
  ],
  plugins: [
    postcss({
      modules: true,
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['transform-react-remove-prop-types'],
      ignore: ['**/*.stories.js', './src/static/**/*'],
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'prop-types': [
          'array',
          'bool',
          'func',
          'number',
          'object',
          'string',
          'symbol',
          'any',
          'arrayOf',
          'element',
          'elementType',
          'instanceOf',
          'node',
          'objectOf',
          'oneOf',
          'oneOfType',
          'shape',
          'exact',
        ],
      },
    }),
  ],
  external: ['react', 'react-dom'],
};
