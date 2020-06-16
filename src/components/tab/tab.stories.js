import React from 'react';
import { select } from '@storybook/addon-knobs';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconTab, TabGroup, TitleTab, Box, Counter as UICounter } from '../../index';

import { tabItems } from '../../static/data/tab';
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

const TitleCounter = (props) => <UICounter color="ruby" marginLeft={3} {...props} />;
const IconCounter = (props) => <UICounter color="ruby" {...props} />;

export default {
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Tab'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3336%3A291',
    },
    info: {
      propTablesExclude: [Box],
    },
  },
};

export const titleTab = () => (
  <TabGroup size={select('Size', ['small', 'medium'], 'medium')}>
    {tabItems.map((item, key) => {
      const optionalProps = item.count
        ? {
            counter: React.createElement(TitleCounter, {
              count: item.count,
              color: item.active ? 'mint' : 'neutral',
              size: select('Size', ['small', 'medium'], 'medium'),
            }),
          }
        : {};
      return (
        <TitleTab
          active={item.active}
          href={item.href}
          onClick={(event) => {
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
);

titleTab.story = {
  name: 'Title tab',
};

export const iconTab = () => (
  <TabGroup size={select('Size', ['small', 'medium'], 'medium')}>
    {tabItems.map((item, key) => {
      const optionalProps = item.count
        ? {
            counter: React.createElement(IconCounter, {
              count: item.count,
              color: item.active ? 'mint' : 'neutral',
              size: select('Size', ['small', 'medium'], 'medium'),
            }),
          }
        : {};
      const IconToRender = iconMap[item.icon.toLowerCase()];
      return (
        <IconTab
          active={item.active}
          href={item.href}
          onClick={(event) => {
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
);

iconTab.story = {
  name: 'Icon tab',
};
