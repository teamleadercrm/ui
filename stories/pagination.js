import React from 'react';
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Island, Pagination, LinkButton } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const store = new Store({
  currentPage: 1,
  numPages: 21,
});

const handlePageChange = page => {
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
        <Pagination numPages={store.get('numPages')} currentPage={store.get('currentPage')}>
          {(number, text, isActive, icon, iconPlacement) => {
            return (
              <LinkButton
                label={text}
                disabled={isActive}
                onClick={() => handlePageChange(number)}
                size="small"
                icon={icon}
                iconPlacement={iconPlacement}
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
          {(number, text, isActive, icon, iconPlacement) => {
            return (
              <LinkButton
                label={text}
                disabled={isActive}
                onClick={() => handlePageChange(number)}
                size="small"
                icon={icon}
                iconPlacement={iconPlacement}
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
          {(number, text, isActive, icon, iconPlacement) => {
            return (
              <LinkButton
                label={text}
                disabled={isActive}
                onClick={() => handlePageChange(number)}
                size="small"
                icon={icon}
                iconPlacement={iconPlacement}
                inverse
              />
            );
          }}
        </Pagination>
      </State>
    </Island>
  ));
