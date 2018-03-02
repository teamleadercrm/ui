import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
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
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('compact', () => (
    <Island>
      <State store={store}>
        <Pagination numPages={store.get('numPages')} currentPage={store.get('currentPage')}>
          {({ number, text, isActive, ...others }) => {
            return (
              <LinkButton
                label={text}
                disabled={isActive}
                onClick={() => handlePageChange(number)}
                size="small"
                {...others}
              />
            );
          }}
        </Pagination>
      </State>
    </Island>
  ))
  .add('normal', () => (
    <Island>
      <State store={store}>
        <Pagination
          numPages={store.get('numPages')}
          currentPage={store.get('currentPage')}
          prevPageText="previous"
          nextPageText="next"
        >
          {({ number, text, isActive, ...others }) => {
            return (
              <LinkButton
                label={text}
                disabled={isActive}
                onClick={() => handlePageChange(number)}
                size="small"
                {...others}
              />
            );
          }}
        </Pagination>
      </State>
    </Island>
  ))
  .add('inverse', () => (
    <Island style={{backgroundColor: '#2a3b4d'}}>
      <State store={store}>
        <Pagination
          numPages={store.get('numPages')}
          currentPage={store.get('currentPage')}
          prevPageText="previous"
          nextPageText="next"
          inverse
        >
          {({ number, text, isActive, ...others }) => {
            return (
              <LinkButton
                label={text}
                disabled={isActive}
                onClick={() => handlePageChange(number)}
                size="small"
                inverse
                {...others}
              />
            );
          }}
        </Pagination>
      </State>
    </Island>
  ));
