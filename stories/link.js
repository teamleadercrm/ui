import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { IconAddSmallOutline } from '@teamleader/ui-icons';
import { Link, TextDisplay } from '../components';

const elements = ['a', 'button'];
const colors = ['white', 'neutral', 'mint', 'teal', 'violet', 'ruby', 'gold', 'aqua'];
const iconPositions = ['left', 'right'];

storiesOf('Links', module)
  .addParameters({
    info: {
      propTablesExclude: [TextDisplay],
    },
  })
  .add('With text', () => (
    <TextDisplay color={select('Color', colors, 'teal')}>
      Display text with a{' '}
      <Link href="https://www.teamleader.be" target="_blank" inherit={boolean('Inherit', false)}>
        link
      </Link>{' '}
      inside
    </TextDisplay>
  ))
  .add('With text and icon', () => (
    <TextDisplay color={select('Color', colors, 'teal')}>
      <Link
        href="https://www.teamleader.be"
        icon={<IconAddSmallOutline />}
        iconPlacement={select('Icon placement', iconPositions, 'left')}
        target="_blank"
        inherit={boolean('Inherit', false)}
      >
        link
      </Link>
    </TextDisplay>
  ))
  .add('With custom element', () => (
    <TextDisplay color={select('Color', colors, 'teal')}>
      <Link
        element={select('Element', elements, 'button')}
        icon={<IconAddSmallOutline />}
        iconPlacement={select('Icon placement', iconPositions, 'left')}
        inherit={boolean('Inherit', false)}
      >
        link
      </Link>
    </TextDisplay>
  ));
