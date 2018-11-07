import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';
import { Box, Heading1, Heading2, Heading3, Heading4, StatusLabel, TextBody, TextDisplay, TextSmall } from '../src';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

storiesOf('Status Labels', module)
  .addParameters({
    info: {
      propTablesExclude: [Box, Heading1, Heading2, Heading3, Heading4, TextBody, TextDisplay, TextSmall],
    },
  })
  .add('Basic', () => (
    <StatusLabel color={select('Color', colors, 'neutral')} size={select('Size', sizes, 'medium')}>
      Status label
    </StatusLabel>
  ))
  .add('Inline with text', () => (
    <Box>
      <Heading1>
        I'm an Header 1 with a
        <StatusLabel color={select('Color', colors, 'neutral')} size="medium">
          Status label
        </StatusLabel>
      </Heading1>
      <Heading2 marginTop={4}>
        I'm an Header 2 with a
        <StatusLabel color={select('Color', colors, 'neutral')} size="medium">
          Status label
        </StatusLabel>
      </Heading2>
      <Heading3 marginTop={4}>
        I'm an Header 3 with a
        <StatusLabel color={select('Color', colors, 'neutral')} size="medium">
          Status label
        </StatusLabel>
      </Heading3>
      <Heading4 marginTop={4}>
        I'm an Header 4 with a
        <StatusLabel color={select('Color', colors, 'neutral')} size="medium">
          Status label
        </StatusLabel>
      </Heading4>
      <TextDisplay marginTop={4}>
        I'm an text display with a
        <StatusLabel color={select('Color', colors, 'neutral')} size="medium">
          Status label
        </StatusLabel>
      </TextDisplay>
      <TextBody marginTop={4}>
        I'm an text body with a
        <StatusLabel color={select('Color', colors, 'neutral')} size="small">
          Status label
        </StatusLabel>
      </TextBody>
      <TextSmall marginTop={4}>
        I'm an text small with a
        <StatusLabel color={select('Color', colors, 'neutral')} size="small">
          Status label
        </StatusLabel>
      </TextSmall>
    </Box>
  ));
