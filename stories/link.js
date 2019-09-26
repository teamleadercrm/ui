import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconAddSmallOutline } from '@teamleader/ui-icons';
import { COLORS, TINTS, Link, TextBody, TextDisplay, TextSmall } from '../src';

const elements = ['a', 'button'];
const iconPositions = ['left', 'right'];

storiesOf('Links', module)
  .addParameters({
    info: {
      propTablesExclude: [TextBody, TextDisplay, TextSmall],
    },
  })
  .add('Link only', () => (
    <Link
      disabled={boolean('Disabled', false)}
      href="https://www.teamleader.be"
      target="_blank"
      inherit={boolean('Inherit', false)}
      inverse={boolean('Inverse', false)}
    >
      link
    </Link>
  ))
  .add('With text', () => (
    <TextBody color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')}>
      Display text with a{' '}
      <Link
        href="https://www.teamleader.be"
        target="_blank"
        disabled={boolean('Disabled', false)}
        inherit={boolean('Inherit', false)}
        inverse={boolean('Inverse', false)}
      >
        link
      </Link>{' '}
      inside
    </TextBody>
  ))
  .add('With text and icon', () => (
    <TextBody color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')}>
      <Link
        disabled={boolean('Disabled', false)}
        href="https://www.teamleader.be"
        icon={<IconAddSmallOutline />}
        iconPlacement={select('Icon placement', iconPositions, 'left')}
        target="_blank"
        inherit={boolean('Inherit', false)}
        inverse={boolean('Inverse', false)}
      >
        link
      </Link>
    </TextBody>
  ))
  .add('With custom element', () => (
    <TextBody color={select('Color', COLORS, 'teal')} tint={select('Tint', TINTS, 'darkest')}>
      <Link
        disabled={boolean('Disabled', false)}
        element={select('Element', elements, 'button')}
        icon={<IconAddSmallOutline />}
        iconPlacement={select('Icon placement', iconPositions, 'left')}
        inherit={boolean('Inherit', false)}
        inverse={boolean('Inverse', false)}
      >
        link
      </Link>
    </TextBody>
  ))
  .add('Subtle icon link', () => (
    <TextSmall color={select('Color', COLORS, 'neutral')} tint={select('Tint', TINTS, 'darkest')}>
      <Link
        disabled={boolean('Disabled', false)}
        element={select('Element', elements, 'button')}
        icon={<IconAddSmallOutline />}
        iconPlacement={select('Icon placement', iconPositions, 'left')}
        inherit={boolean('Inherit', true)}
        inverse={boolean('Inverse', false)}
      >
        Discount
      </Link>
    </TextSmall>
  ));
