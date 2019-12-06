import React from 'react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';
import { colorsWithout, Badge, TextDisplay } from '../src';

const colors = colorsWithout(['teal']);
const iconPositions = ['left', 'right'];

export default {
  title: 'Badge',

  parameters: {
    info: {
      propTablesExclude: [TextDisplay],
    },
  },
};

export const inline = () => (
  <TextDisplay>
    I'm display text with a
    <Badge
      color={select('Color', colors, 'neutral')}
      disabled={boolean('Disabled', false)}
      inherit={boolean('Inherit', true)}
      inverse={boolean('Inverse', false)}
    >
      badge
    </Badge>
    inside.
  </TextDisplay>
);

export const standalone = () => (
  <Badge
    color={select('Color', colors, 'neutral')}
    disabled={boolean('Disabled', false)}
    inherit={boolean('Inherit', false)}
    inverse={boolean('Inverse', false)}
  >
    I'm a badge
  </Badge>
);

export const withIcon = () => (
  <Badge
    color={select('Color', colors, 'neutral')}
    disabled={boolean('Disabled', false)}
    icon={<IconBuildingSmallOutline />}
    iconPlacement={select('Icon placement', iconPositions, 'left')}
    inherit={boolean('Inherit', false)}
    inverse={boolean('Inverse', false)}
  >
    I'm a badge
  </Badge>
);

withIcon.story = {
  name: 'With icon',
};

export const withCustomElement = () => (
  <Badge
    color={select('Color', colors, 'neutral')}
    disabled={boolean('Disabled', false)}
    element="a"
    href="https://teamleader.eu"
    inherit={boolean('Inherit', false)}
    inverse={boolean('Inverse', false)}
  >
    I'm a badge
  </Badge>
);

withCustomElement.story = {
  name: 'With custom element',
};
