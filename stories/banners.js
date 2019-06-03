import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { IconIdeaMediumOutline } from '@teamleader/ui-icons';
import { Banner, Link, TextDisplay, SMALL, MEDIUM, LARGE } from '../src';

const colors = ['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua'];

storiesOf('Banner', module)
  .addParameters({
    info: {
      propTablesExclude: [TextDisplay, Link],
    },
  })
  .add('Default', () => (
    <Banner
      color={select('Color', colors, 'white')}
      fullWidth={boolean('Full width', false)}
      icon={<IconIdeaMediumOutline />}
      size={select('Size', [SMALL, MEDIUM, LARGE], MEDIUM)}
    >
      <TextDisplay>
        {text(
          'Banner text',
          'I am a banner and contain text that appears across multiple lines depending on how wide I am.',
        )}
      </TextDisplay>
    </Banner>
  ))
  .add('With link inside', () => (
    <Banner
      color={select('Color', colors, 'white')}
      fullWidth={boolean('Full width', false)}
      icon={<IconIdeaMediumOutline />}
      size={select('Size', [SMALL, MEDIUM, LARGE], MEDIUM)}
    >
      <TextDisplay>
        I am a banner with an <Link href="http://teamleader.eu">optional link</Link> inside.
      </TextDisplay>
    </Banner>
  ));
