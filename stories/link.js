import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconAddSmallOutline } from '@teamleader/ui-icons';
import { Link, TextBody, TextDisplay, TextSmall } from '../src/components';
import { COLORS, TINTS } from '../src/constants';

const elements = ['a', 'button'];
const iconPositions = ['left', 'right'];

storiesOf('Links', module)
  .addParameters({
    info: {
      propTablesExclude: [TextDisplay, TextSmall],
    },
  })
  .add('Link only', () => (
    <Link href="https://www.teamleader.be" target="_blank" inherit={boolean('inherit', false)}>
      link
    </Link>
  ))
  .add('With text', () => (
    <TextBody color={select('color', COLORS, 'teal')} tint={select('tint', TINTS, 'darkest')}>
      Display text with a{' '}
      <Link href="https://www.teamleader.be" target="_blank" inherit={boolean('inherit', false)}>
        link
      </Link>{' '}
      inside
    </TextBody>
  ))
  .add('With text and icon', () => (
    <TextBody color={select('color', COLORS, 'teal')} tint={select('tint', TINTS, 'darkest')}>
      <Link
        href="https://www.teamleader.be"
        icon={<IconAddSmallOutline />}
        iconPlacement={select('iconPlacement', iconPositions, 'left')}
        target="_blank"
        inherit={boolean('inherit', false)}
      >
        link
      </Link>
    </TextBody>
  ))
  .add('With custom element', () => (
    <TextBody color={select('color', COLORS, 'teal')} tint={select('tint', TINTS, 'darkest')}>
      <Link
        element={select('element', elements, 'button')}
        icon={<IconAddSmallOutline />}
        iconPlacement={select('iconPlacement', iconPositions, 'left')}
        inherit={boolean('inherit', false)}
      >
        link
      </Link>
    </TextBody>
  ))
  .add('Subtle icon link', () => (
    <TextSmall color={select('color', COLORS, 'neutral')} tint={select('tint', TINTS, 'darkest')}>
      <Link
        element={select('element', elements, 'button')}
        icon={<IconAddSmallOutline />}
        iconPlacement={select('iconPlacement', iconPositions, 'left')}
        inherit={boolean('inherit', true)}
      >
        Discount
      </Link>
    </TextSmall>
  ));
