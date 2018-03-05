import React from 'react';
import PropTable from "./components/propTable";
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, Island, Counter as UICounter } from '../components';
import { Store, State } from '@sambego/storybook-state';
import { IconTab, TabGroup, TitleTab } from '../components';

import {
  IconCalendarMediumOutline,
  IconCheckmarkMediumOutline,
  IconContactsMediumOutline,
  IconInvoiceMediumOutline,
  IconProductsMediumOutline,
  IconStatsMediumOutline,
  IconTimerMediumOutline,
} from '@teamleader/ui-icons';

const store = new Store({
  items: [
    {
      active: false,
      href: '#',
      icon: 'Invoices',
      title: 'Invoices',
    },
    {
      active: true,
      href: '#',
      icon: 'CRM',
      title: 'CRM',
    },
    {
      active: false,
      count: 30,
      href: '#',
      icon: 'Planning',
      title: 'Planning',
    },
  ],
  invertedItems: [
    {
      active: true,
      count: 8,
      href: '#',
      icon: 'Products',
      title: 'Products',
    },
    {
      active: false,
      href: '#',
      icon: 'Deals',
      title: 'Deals',
    },
    {
      active: false,
      href: '#',
      icon: 'Stats',
      title: 'Stats',
    },
  ],
});

const iconMap = {
  crm: IconContactsMediumOutline,
  invoices: IconInvoiceMediumOutline,
  products: IconProductsMediumOutline,
  stats: IconStatsMediumOutline,
  time: IconTimerMediumOutline,
  deals: IconCheckmarkMediumOutline,
  planning: IconCalendarMediumOutline,
};

// Real-life tabs should not have a clickHandler but rather listen to state updates
const handleClick = (event, title) => {
  event.preventDefault();
  store.set({
    items: store.state.items.map(item => ({
      ...item,
      active: item.title === title,
    })),
  });
};

const handleInvertedClick = (event, title) => {
  event.preventDefault();
  store.set({
    invertedItems: store.state.invertedItems.map(invertedItem => ({
      ...invertedItem,
      active: invertedItem.title === title,
    })),
  });
};

const TitleCounter = props => <UICounter color="ruby" marginLeft={3} {...props} />;
const IconCounter = props => <UICounter color="ruby" {...props} />;

storiesOf('Tab', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .add('titletab', () => (
    <Box>
      <State store={store}>
        <TitleTabContainer />
      </State>
      <State store={store}>
        <InvertedTitleTabContainer />
      </State>
    </Box>
  ))
  .add('icontab', () => (
    <Box>
      <State store={store}>
        <IconTabContainer />
      </State>
      <State store={store}>
        <InvertedIconTabContainer />
      </State>
    </Box>
  ));

const TitleTabContainer = () => (
  <Island>
    <TabGroup display={'flex'}>
      {store.get('items').map((item, key) => {
        const optionalProps = item.count
          ? { counter: React.createElement(TitleCounter, { count: item.count, color: 'mint' }) }
          : {};
        return (
          <TitleTab
            active={item.active}
            href={item.href}
            onClick={event => {
              handleClick(event, item.title);
            }}
            {...optionalProps}
            key={key}
          >
            {item.title}
          </TitleTab>
        );
      })}
    </TabGroup>
  </Island>
);

const InvertedTitleTabContainer = () => (
  <Island style={{ background: '#2a3b4d' }}>
    <TabGroup inverted display={'flex'}>
      {store.get('invertedItems').map((invertedItem, key) => {
        const optionalProps = invertedItem.count
          ? { counter: React.createElement(TitleCounter, { count: invertedItem.count }) }
          : {};
        return (
          <TitleTab
            active={invertedItem.active}
            href={invertedItem.href}
            onClick={event => {
              handleInvertedClick(event, invertedItem.title);
            }}
            {...optionalProps}
            key={key}
          >
            {invertedItem.title}
          </TitleTab>
        );
      })}
    </TabGroup>
  </Island>
);

const IconTabContainer = () => (
  <Island>
    <TabGroup display={'flex'}>
      {store.get('items').map((item, key) => {
        const optionalProps = item.count
          ? { counter: React.createElement(IconCounter, { count: item.count, color: 'mint' }) }
          : {};
        const IconToRender = iconMap[item.icon.toLowerCase()];
        return (
          <IconTab
            active={item.active}
            href={item.href}
            onClick={event => {
              handleClick(event, item.title);
            }}
            icon={<IconToRender />}
            {...optionalProps}
            key={key}
          >
            {item.title}
          </IconTab>
        );
      })}
    </TabGroup>
  </Island>
);

const InvertedIconTabContainer = () => (
  <Island style={{ background: '#2a3b4d' }}>
    <TabGroup inverted display={'flex'}>
      {store.get('invertedItems').map((invertedItem, key) => {
        const optionalProps = invertedItem.count
          ? { counter: React.createElement(IconCounter, { count: invertedItem.count }) }
          : {};
        const IconToRender = iconMap[invertedItem.icon.toLowerCase()];
        return (
          <IconTab
            active={invertedItem.active}
            href={invertedItem.href}
            onClick={event => {
              handleInvertedClick(event, invertedItem.title);
            }}
            icon={<IconToRender />}
            {...optionalProps}
            key={key}
          >
            {invertedItem.title}
          </IconTab>
        );
      })}
    </TabGroup>
  </Island>
);
