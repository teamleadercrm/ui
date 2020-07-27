import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { select } from '@storybook/addon-knobs';
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
} from '../../index';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Status Label'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=246%3A1041',
    },
    info: {
      propTablesExclude: [Box, Heading1, Heading2, Heading3, Heading4, TextBody, TextDisplay, TextSmall],
    },
  },
};

export const basic = () => (
  <StatusLabel color={select('Color', colors, 'neutral')} size={select('Size', sizes, 'medium')}>
    Status label
  </StatusLabel>
);

export const inlineWithText = () => (
  <Box>
    <Heading1>
      I'm an Header 1 with a
      <StatusLabel color={select('Color', colors, 'neutral')} size="medium" marginLeft={2}>
        Status label
      </StatusLabel>
    </Heading1>
    <Heading2 marginTop={4}>
      I'm an Header 2 with a
      <StatusLabel color={select('Color', colors, 'neutral')} size="medium" marginLeft={2}>
        Status label
      </StatusLabel>
    </Heading2>
    <Heading3 marginTop={4}>
      I'm an Header 3 with a
      <StatusLabel color={select('Color', colors, 'neutral')} size="medium" marginLeft={2}>
        Status label
      </StatusLabel>
    </Heading3>
    <Heading4 marginTop={4}>
      I'm an Header 4 with a
      <StatusLabel color={select('Color', colors, 'neutral')} size="medium" marginLeft={2}>
        Status label
      </StatusLabel>
    </Heading4>
    <TextDisplay marginTop={4}>
      I'm an text display with a
      <StatusLabel color={select('Color', colors, 'neutral')} size="medium" marginLeft={2}>
        Status label
      </StatusLabel>
    </TextDisplay>
    <TextBody marginTop={4}>
      I'm an text body with a
      <StatusLabel color={select('Color', colors, 'neutral')} size="small" marginLeft={2}>
        Status label
      </StatusLabel>
    </TextBody>
    <TextSmall marginTop={4}>
      I'm an text small with a
      <StatusLabel color={select('Color', colors, 'neutral')} size="small" marginLeft={2}>
        Status label
      </StatusLabel>
    </TextSmall>
  </Box>
);

inlineWithText.story = {
  name: 'Inline with text',
};
