import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Badge, TextDisplay } from '../src/components';
import { colorsWithout } from '../src/constants';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';

const colors = colorsWithout(['teal']);
const iconPositions = ['left', 'right'];

storiesOf('Badge', module)
  .addParameters({
    info: {
      propTablesExclude: [TextDisplay],
    },
  })
  .add('inline', () => (
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
  .add('standalone', () => (
    <Badge
      color={select('Color', colors, 'neutral')}
      disabled={boolean('Disabled', false)}
      inherit={boolean('Inherit', false)}
      inverse={boolean('Inverse', false)}
    >
      I'm a badge
    </Badge>
  ))
  .add('with icon', () => (
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
  .add('with custom element', () => (
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
