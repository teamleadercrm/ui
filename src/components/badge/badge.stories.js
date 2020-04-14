import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';
import { Badge, TextDisplay } from '../../index';

const iconPositions = ['left', 'right'];

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Badge'),

  parameters: {
    info: {
      propTablesExclude: [TextDisplay],
    },
  },
};

export const inline = () => (
  <TextDisplay>
    I'm display text with a
    <Badge disabled={boolean('Disabled', false)} inherit={boolean('Inherit', true)} marginHorizontal={1}>
      badge
    </Badge>
    inside.
  </TextDisplay>
);

export const standalone = () => (
  <Badge disabled={boolean('Disabled', false)} inherit={boolean('Inherit', false)}>
    I'm a badge
  </Badge>
);

export const withIcon = () => (
  <Badge
    disabled={boolean('Disabled', false)}
    icon={<IconBuildingSmallOutline />}
    iconPlacement={select('Icon placement', iconPositions, 'left')}
    inherit={boolean('Inherit', false)}
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
    inherit={boolean('Inherit', false)}
  >
    I'm a badge
  </Badge>
);

withCustomElement.story = {
  name: 'With custom element',
};
