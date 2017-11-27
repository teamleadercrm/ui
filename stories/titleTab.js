import React from 'react';
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Island, TitleTab } from '../components';
import { Store, State } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import { baseStyles, centerStyles } from '../.storybook/styles';

const store = new Store({
  items: [
    {
      title: 'Invoices',
      active: false,
    },
    {
      title: 'CRM',
      active: true,
    },
    {
      title: 'Planning',
      active: false,
    },
  ],
});

// Real-life tabs should not have a clickHandler but rather listen to state updates
const handleClick = title => {
  store.set({
    items: store.state.items.map(item => ({
      ...item,
      active: item.title === title,
    })),
  });
  action(`New active is ${title}`)(store.state.items);
};

storiesOf('TitleTab', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('general', () => {
    return (
      <Island style={{ display: 'flex' }}>
        {store.state.items.map((item, key) => {
          return (
            <State store={store}>
              <TitleTab onClick={() => handleClick(item.title)} active={item.active} key={key}>
                {item.title}
              </TitleTab>
            </State>
          );
        })}
      </Island>
    );
  });
