import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs/react';
import { Island, Pagination, Button } from '../src/components';

storiesOf('Pagination', module)
  .addParameters({
    info: {
      propTablesExclude: [Island],
    },
  })
  .add('Compact', () => (
    <Island style={boolean('Inverse', false) ? { backgroundColor: '#2a3b4d' } : {}}>
      <Pagination
        numPages={number('Number of pages', 21)}
        currentPage={number('Current page', 1)}
        inverse={boolean('Inverse', false)}
      >
        {({ number, text, isActive, ...others }) => {
          return (
            <Button
              level="link"
              label={text}
              disabled={isActive}
              inverse={boolean('Inverse', false)}
              size="small"
              {...others}
            />
          );
        }}
      </Pagination>
    </Island>
  ))
  .add('Normal', () => (
    <Island style={boolean('Inverse', false) ? { backgroundColor: '#2a3b4d' } : {}}>
      <Pagination
        numPages={number('Number of pages', 21)}
        currentPage={number('Current page', 1)}
        inverse={boolean('Inverse', false)}
        prevPageText="previous"
        nextPageText="next"
      >
        {({ number, text, isActive, ...others }) => {
          return (
            <Button
              level="link"
              label={text}
              disabled={isActive}
              inverse={boolean('Inverse', false)}
              size="small"
              {...others}
            />
          );
        }}
      </Pagination>
    </Island>
  ));
