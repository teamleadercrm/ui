import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';
import { colorsWithout, Badge, TextDisplay } from '../src';

const colors = colorsWithout(['teal']);
const iconPositions = ['left', 'right'];

storiesOf('Badge', module)
  .addParameters({
    info: {
      propTablesExclude: [TextDisplay],
    },
  })
  .add('Inline', () => (
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
  ))
  .add('Standalone', () => (
    <Badge
      color={select('Color', colors, 'neutral')}
      disabled={boolean('Disabled', false)}
      inherit={boolean('Inherit', false)}
      inverse={boolean('Inverse', false)}
    >
      I'm a badge
    </Badge>
  ))
  .add('With icon', () => (
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
  ))
  .add('With custom element', () => (
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
  ));
