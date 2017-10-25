import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Box, DataGrid } from '../components';

storiesOf('DataGrids', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('colors', () => (
    <Box padding={5}>
      <DataGrid>
        I am a DataGrid
      </DataGrid>
    </Box>
  ));
