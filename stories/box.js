import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs/react';
import { Box, TextBody } from '../src';

const displayValues = ['inline', 'inline-block', 'block', 'flex', 'inline-flex'];
const justifyContentValues = ['center', 'flex-start', 'flex-end', 'space-around', 'space-between', 'space-evenly'];

const spacingOptions = {
  range: true,
  min: 0,
  max: 8,
  step: 1,
};

storiesOf('Box', module)
  .addParameters({
    info: {
      propTablesExclude: [TextBody],
    },
  })
  .add('Basic', () => (
    <Box
      style={{ backgroundColor: '#fafafa' }}
      display={select('display', displayValues, 'block')}
      justifyContent={select('justifyContent', justifyContentValues, 'flex-start')}
      margin={number('margin', 0, spacingOptions)}
      padding={number('padding', 3, spacingOptions)}
    >
      <TextBody>I'm body text inside a Box component</TextBody>
    </Box>
  ));
