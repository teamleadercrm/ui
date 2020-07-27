import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';
import { Badge, TextDisplay } from '../../index';

const iconPositions = ['left', 'right'];
const sizes = ['small', 'medium', 'large'];

export default {
  component: Badge,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Badge'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3943%3A715',
    },
    info: {
      propTablesExclude: [TextDisplay],
    },
  },
};

export const basic = () => (
  <Badge disabled={boolean('Disabled', false)} size={select('Size', sizes, 'medium')}>
    I'm a badge
  </Badge>
);

export const withIcon = () => (
  <Badge
    disabled={boolean('Disabled', false)}
    icon={<IconBuildingSmallOutline />}
    iconPlacement={select('Icon placement', iconPositions, 'left')}
    selected={boolean('Selected', false)}
    size={select('Size', sizes, 'medium')}
  >
    I'm a badge
  </Badge>
);

withIcon.story = {
  name: 'With icon',
};

export const withCustomElement = () => (
  <Badge
    disabled={boolean('Disabled', false)}
    element="a"
    href="https://teamleader.eu"
    selected={boolean('Selected', false)}
    size={select('Size', sizes, 'medium')}
  >
    I'm a badge
  </Badge>
);

withCustomElement.story = {
  name: 'With custom element',
};
