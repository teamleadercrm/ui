import React from 'react';
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, TitleTab } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('TitleTab', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('general', () => (
    <Box padding={5}>
      <TitleTab/>
    </Box>
  ));
