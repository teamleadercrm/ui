import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import {
  Box,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  StatusLabel,
  TextBody,
  TextDisplay,
  TextSmall,
} from '../components';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

storiesOf('Status Labels', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Box, Heading1, Heading2, Heading3, Heading4, TextBody, TextDisplay, TextSmall],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
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
