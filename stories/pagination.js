import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { Island, Pagination, LinkButton } from '../components';

const store = new Store({
  currentPage: 1,
  numPages: 21,
});

const handlePageChange = page => {
  store.set({ currentPage: page });
};

storiesOf('Pagination', module)
  .addDecorator((story, context) => withInfo({ TableComponent: PropTable })(story)(context))
  .addDecorator(checkA11y)
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
