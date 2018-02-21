import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from "@storybook/addon-knobs/react";
import styles from '@sambego/storybook-styles';
import { Box, Bullet, TextBody, Tooltip } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby'];
const sizes = ['small', 'medium'];

const TooltippedBullet = Tooltip(Bullet);

storiesOf('Bullets', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('basic', () => (
    <Box>
      <Bullet
        color={select('Color', colors, 'neutral')}
        size={select('Size', sizes, 'medium')}
      />
    </Box>
  ))
  .add('with tooltip', () => (
    <Box>
      <TooltippedBullet
        color={select('Color', colors, 'ruby')}
        size={select('Size', sizes, 'medium')}
        tooltip={<TextBody>I am the tooltip</TextBody>}
      />
    </Box>
  ));
