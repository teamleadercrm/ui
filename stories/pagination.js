import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Island, Pagination, LinkButton } from '../components';

storiesOf('Pagination', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Island],
    })(story)(context),
  )
  .addDecorator(withKnobs)
  .add('Compact', () => (
    <Island style={boolean('Inverse', false) ? { backgroundColor: '#2a3b4d' } : {}}>
      <Pagination
        numPages={number('Number of pages', 21)}
        currentPage={number('Current page', 1)}
        inverse={boolean('Inverse', false)}
      >
        {({ number, text, isActive, ...others }) => {
          return (
            <LinkButton label={text} disabled={isActive} inverse={boolean('Inverse', false)} size="small" {...others} />
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
            <LinkButton label={text} disabled={isActive} inverse={boolean('Inverse', false)} size="small" {...others} />
          );
        }}
      </Pagination>
    </Island>
  ));
