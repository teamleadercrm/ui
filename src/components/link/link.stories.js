import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconAddSmallOutline } from '@teamleader/ui-icons';
import { COLORS, TINTS, Link, TextBody, TextDisplay, TextSmall } from '../../index';

const elements = ['a', 'button'];
const iconPositions = ['left', 'right'];

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Link'),

  parameters: {
    info: {
      propTablesExclude: [TextBody, TextDisplay, TextSmall],
    },
  },
};

export const linkOnly = () => (
  <Link
    disabled={boolean('Disabled', false)}
    href="https://www.teamleader.be"
    target="_blank"
    inherit={boolean('Inherit', false)}
    inverse={boolean('Inverse', false)}
  >
    link
  </Link>
);

linkOnly.story = {
  name: 'Link only',
};

export const withText = () => (
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
);

withText.story = {
  name: 'With text',
};

export const withTextAndIcon = () => (
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
);

withTextAndIcon.story = {
  name: 'With text and icon',
};

export const withCustomElement = () => (
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
);

withCustomElement.story = {
  name: 'With custom element',
};

export const subtleIconLink = () => (
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
);

subtleIconLink.story = {
  name: 'Subtle icon link',
};
