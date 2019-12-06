import React from 'react';
import { number, select } from '@storybook/addon-knobs/react';
import * as Icons from '@teamleader/ui-icons';
import { Box, Icon, TextSmall } from '../src';

const colors = ['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet'];
const tints = ['lightest', 'light', 'normal', 'dark', 'darkest'];

const gridStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

const itemStyles = {
  alignItems: 'center',
  display: 'flex',
  width: '320px',
  whitespace: 'nowrap',
};

export default {
  title: 'Icons',

  parameters: {
    info: {
      source: false,
      propTables: false,
    },
  },
};

export const _14X14 = () => (
  <Box style={gridStyles}>
    {Object.keys(Icons).map((key, index) => {
      if (key.includes('Small')) {
        const IconToRender = Icons[key];

        return (
          <Box element="span" key={index} style={itemStyles} padding={3}>
            <Icon
              color={select('Color', colors, 'teal')}
              tint={select('Tint', tints, 'dark')}
              opacity={number('Opacity', 0.84, {
                range: true,
                min: 0,
                max: 1,
                step: 0.01,
              })}
            >
              <IconToRender />
            </Icon>
            <TextSmall marginLeft={3} style={{ display: 'inline-block' }}>
              {key}
            </TextSmall>
          </Box>
        );
      }
    })}
  </Box>
);

_14X14.story = {
  name: '14x14',
};

export const _24X24 = () => (
  <Box style={gridStyles}>
    {Object.keys(Icons).map((key, index) => {
      if (key.includes('Medium')) {
        const IconToRender = Icons[key];

        return (
          <Box element="span" key={index} style={itemStyles} padding={3}>
            <Icon
              color={select('Color', colors, 'teal')}
              tint={select('Tint', tints, 'dark')}
              opacity={number('Opacity', 0.84, {
                range: true,
                min: 0,
                max: 1,
                step: 0.01,
              })}
            >
              <IconToRender />
            </Icon>
            <TextSmall marginLeft={3} style={{ display: 'inline-block' }}>
              {key}
            </TextSmall>
          </Box>
        );
      }
    })}
  </Box>
);

_24X24.story = {
  name: '24x24',
};
