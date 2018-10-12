import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { IconTab, TabGroup, TitleTab, Box, Counter as UICounter } from '../components';
import { tabItems, invertedTabItems } from './static/data/tab';

import {
  IconCalendarMediumOutline,
  IconCheckmarkMediumOutline,
  IconContactsMediumOutline,
  IconInvoiceMediumOutline,
  IconProductsMediumOutline,
  IconStatsMediumOutline,
  IconTimerMediumOutline,
} from '@teamleader/ui-icons';

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
};

const TitleCounter = props => <UICounter color="ruby" marginLeft={3} {...props} />;
const IconCounter = props => <UICounter color="ruby" {...props} />;

storiesOf('Tab', module)
  .addParameters({
    info: {
      propTablesExclude: [Box],
    },
  })
  .add('titletab', () => (
    <TabGroup inverted={boolean('Inverted', true)} display={'flex'}>
      {tabItems.map((item, key) => {
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
  ))
  .add('icontab', () => (
    <TabGroup inverted={boolean('Inverted', true)} display={'flex'}>
      {invertedTabItems.map((item, key) => {
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
  ));
