import React, { CSSProperties } from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import * as Icons from '@teamleader/ui-icons';
import { Box, Icon, TextSmall } from '../../index';
import { IconWarningBadgedMediumOutline } from '@teamleader/ui-icons';
import description from './description.md';
import { ComponentStory } from '@storybook/react';

const gridStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
};

const itemStyles: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  width: '320px',
  whiteSpace: 'nowrap',
};

export default {
  component: Icon,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Icon'),
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const DefaultStory: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args}>
    <IconWarningBadgedMediumOutline />
  </Icon>
);

export const Overview14x14 = () => (
  <Box style={gridStyles}>
    {Object.keys(Icons).map((key, index) => {
      if (key.includes('Small')) {
        const IconToRender = Icons[key];

        return (
          <Box element="span" key={index} style={itemStyles} padding={3}>
            <Icon>
              <IconToRender />
            </Icon>
            <TextSmall marginLeft={3} style={{ display: 'inline-block' }}>
              {key}
            </TextSmall>
          </Box>
        );
      }
      return null;
    })}
  </Box>
);

export const Overview24x24 = () => (
  <Box style={gridStyles}>
    {Object.keys(Icons).map((key, index) => {
      if (key.includes('Medium')) {
        const IconToRender = Icons[key];

        return (
          <Box element="span" key={index} style={itemStyles} padding={3}>
            <Icon>
              <IconToRender />
            </Icon>
            <TextSmall marginLeft={3} style={{ display: 'inline-block' }}>
              {key}
            </TextSmall>
          </Box>
        );
      }
      return null;
    })}
  </Box>
);
