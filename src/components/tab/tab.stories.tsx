import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { TabGroup, TitleTab, Box, Counter as UICounter } from '../../index';

import { tabItems } from '../../static/data/tab';
import { TabGroupProps } from './TabGroup';

// Real-life tabs should not have a clickHandler but rather listen to state updates
const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault();
};

const TitleCounter = (props: any) => <UICounter color="ruby" marginLeft={3} {...props} />;

export default {
  component: TitleTab,
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

export const titleTab = (args: TabGroupProps) => (
  <TabGroup size={args.size}>
    {tabItems.map((item, key) => {
      const optionalProps = item.count
        ? {
            counter: React.createElement(TitleCounter, {
              count: item.count,
              color: item.active ? 'mint' : 'neutral',
              size: args.size,
            }),
          }
        : {};
      return (
        <TitleTab
          active={item.active}
          href={item.href}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            handleClick(event);
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

titleTab.storyName = 'Title tab';
titleTab.args = {
  size: 'medium',
};
