import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import {
  Box,
  StatusBullet,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  TextBody,
  TextDisplay,
  TextSmall,
} from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

storiesOf('Status Bullets', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
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
          <TextBody>{size}</TextBody>
        </StatusBullet>
      ))}
    </Box>
  ))
  .add('with custom labels', () => (
    <Box>
      <StatusBullet margin={4}>
        <Heading1>Heading 1</Heading1>
      </StatusBullet>
      <StatusBullet margin={4}>
        <Heading2>Heading 2</Heading2>
      </StatusBullet>
      <StatusBullet size="small" margin={4}>
        <Heading3>Heading 3</Heading3>
      </StatusBullet>
      <StatusBullet size="small" margin={4}>
        <Heading4>Heading 4</Heading4>
      </StatusBullet>
      <StatusBullet size="small" margin={4}>
        <TextDisplay>Text Display</TextDisplay>
      </StatusBullet>
      <StatusBullet size="small" margin={4}>
        <TextBody>TextBody</TextBody>
      </StatusBullet>
      <StatusBullet size="small" margin={4}>
        <TextSmall>TextSmall</TextSmall>
      </StatusBullet>
    </Box>
  ));
