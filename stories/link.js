import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Link, TextDisplay } from '../components';

const colors = ['white', 'neutral', 'mint', 'teal', 'violet', 'ruby', 'gold', 'aqua'];

storiesOf('Links', module)
  .addParameters({
    info: {
      propTablesExclude: [TextDisplay],
    },
  })
  .add('Basic', () => (
    <TextDisplay color={select('Color', colors, 'teal')}>
      Display text with a{' '}
      <Link href="https://www.teamleader.be" target="_blank" inherit={boolean('Inherit', false)}>
        link
      </Link>{' '}
      inside
    </TextDisplay>
  ));
