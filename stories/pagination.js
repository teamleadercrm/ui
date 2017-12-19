import React from 'react';
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Island, Pagination } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const store = new Store({
  currentPage: 1,
  numItems: 200,
});

const handlePageChange = (page) => {
  store.set({ currentPage: page });
  action(`onChange - go to page ${page}`)();
};

storiesOf('Pagination', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('compact', () => (
    <Island>
      <State store={store}>
        <Pagination
          numItems={store.get('numItems')}
          onPageChange={handlePageChange}
        />
      </State>
    </Island>
  ))
  .add('normal', () => (
    <Island>
      <State store={store}>
        <Pagination
          numItems={store.get('numItems')}
          nextPageText="Next"
          prevPageText="Previous"
          onPageChange={handlePageChange}
        />
      </State>
    </Island>
  ))
  .add('inverse', () => (
    <Island style={{backgroundColor: '#2a3b4d'}}>
      <State store={store}>
        <Pagination
          inverse
          numItems={store.get('numItems')}
          nextPageText="Next"
          prevPageText="Previous"
          onPageChange={handlePageChange}
        />
      </State>
    </Island>
  ));
