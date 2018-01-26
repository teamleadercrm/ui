import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Box, StatusBullet, TextBody } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

storiesOf('Status Bullets', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('colors', () => (
    <Box>
      {colors.map((color, key) => (
        <StatusBullet color={color} key={key} marginHorizontal={4}>
          <TextBody>{color}</TextBody>
        </StatusBullet>
      ))}
    </Box>
  ))
  .add('sizes', () => (
    <Box>
      {sizes.map((size, key) => (
        <StatusBullet size={size} key={key} marginHorizontal={4}>
          <TextBody element="span">{size}</TextBody>
        </StatusBullet>
      ))}
    </Box>
  ));
