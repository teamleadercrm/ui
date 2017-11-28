import React from 'react';
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, Island, Counter as UICounter } from '../components';
import { Store, State } from '@sambego/storybook-state';
import { action } from '@storybook/addon-actions';
import { TabGroup, TitleTab } from '../components/tab';
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
      count: 30,
    },
  ],
  invertedItems: [
    {
      title: 'Products',
      active: true,
      count: 15,
    },
    {
      title: 'Deals',
      active: false,
    },
    {
      title: 'Stats',
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

const handleInvertedClick = title => {
  store.set({
    invertedItems: store.state.invertedItems.map(invertedItem => ({
      ...invertedItem,
      active: invertedItem.title === title,
    })),
  });
};

const Counter = props => <UICounter color="ruby" marginLeft={3} {...props} />

storiesOf('Tab', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('titletab', () => (
    <Box>
      <State store={store}>
        <TitleTabContainer />
      </State>
      <State store={store}>
        <InvertedTitleTabContainer />
      </State>
    </Box>
  ));

const TitleTabContainer = () => (
  <TabGroup>
    <Island style={{ display: 'flex' }}>
      {store.get('items').map((item, key) => {
        const optionalProps = item.count ? {counter: React.createElement(Counter, {count: item.count, color: "mint"})} : {};
        return (
          <TitleTab onClick={() => handleClick(item.title)} active={item.active} {...optionalProps} key={key}>
            {item.title}
          </TitleTab>
        );
      })}
    </Island>
  </TabGroup>
);

const InvertedTitleTabContainer = () => (
  <TabGroup inverted={true}>
    <Island style={{ display: 'flex', background: '#2a3b4d' }}>
      {store.get('invertedItems').map((invertedItem, key) => {
        const optionalProps = invertedItem.count ? {counter: React.createElement(Counter, {count: invertedItem.count})} : {};
        return (
          <TitleTab onClick={() => handleInvertedClick(invertedItem.title)} active={invertedItem.active} {...optionalProps} key={key}>
            {invertedItem.title}
          </TitleTab>
        );
      })}
    </Island>
  </TabGroup>
);
