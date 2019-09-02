import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Illustrations from '@teamleader/ui-illustrations';
import { Box, TextSmall } from '../src';

const gridStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

const itemProps = {
  alignItems: 'center',
  display: 'inline-flex',
  marginBottom: 3,
  marginRight: 3,
};

const itemStyles = {
  width: '480px',
  whitespace: 'nowrap',
};

storiesOf('Illustrations', module)
  .add('36x24', () => (
    <Box style={gridStyles}>
      {Object.keys(Illustrations).map((key, index) => {
        if (key.includes('36X24')) {
          const IllustrationToRender = Illustrations[key];

          return (
            <Box key={index} style={itemStyles} {...itemProps}>
              <Box flex="0 0 36px">
                <IllustrationToRender />
              </Box>
              <TextSmall marginLeft={3}>{key}</TextSmall>
            </Box>
          );
        }
      })}
    </Box>
  ))
  .add('48x48', () => (
    <Box style={gridStyles}>
      {Object.keys(Illustrations).map((key, index) => {
        if (key.includes('48X48')) {
          const IllustrationToRender = Illustrations[key];

          return (
            <Box key={index} style={itemStyles} {...itemProps}>
              <Box flex="0 0 48px">
                <IllustrationToRender />
              </Box>
              <TextSmall marginLeft={3}>{key}</TextSmall>
            </Box>
          );
        }
      })}
    </Box>
  ))
  .add('60x60', () => (
    <Box style={gridStyles}>
      {Object.keys(Illustrations).map((key, index) => {
        if (key.includes('60X60')) {
          const IllustrationToRender = Illustrations[key];

          return (
            <Box key={index} style={itemStyles} {...itemProps}>
              <Box flex="0 0 60px">
                <IllustrationToRender />
              </Box>
              <TextSmall marginLeft={3}>{key}</TextSmall>
            </Box>
          );
        }
      })}
    </Box>
  ))
  .add('90x90', () => (
    <Box style={gridStyles}>
      {Object.keys(Illustrations).map((key, index) => {
        if (key.includes('90X90')) {
          const IllustrationToRender = Illustrations[key];

          return (
            <Box key={index} style={itemStyles} {...itemProps}>
              <Box flex="0 0 90px">
                <IllustrationToRender />
              </Box>
              <TextSmall marginLeft={3}>{key}</TextSmall>
            </Box>
          );
        }
      })}
    </Box>
  ))
  .add('120x120', () => (
    <Box style={gridStyles}>
      {Object.keys(Illustrations).map((key, index) => {
        if (key.includes('120X120')) {
          const IllustrationToRender = Illustrations[key];

          return (
            <Box key={index} style={itemStyles} {...itemProps}>
              <Box flex="0 0 120px">
                <IllustrationToRender />
              </Box>
              <TextSmall marginLeft={3}>{key}</TextSmall>
            </Box>
          );
        }
      })}
    </Box>
  ))
  .add('240x240', () => (
    <Box style={gridStyles}>
      {Object.keys(Illustrations).map((key, index) => {
        if (key.includes('240X240')) {
          const IllustrationToRender = Illustrations[key];

          return (
            <Box key={index} style={itemStyles} {...itemProps}>
              <Box flex="0 0 240px">
                <IllustrationToRender />
              </Box>
              <TextSmall marginLeft={3}>{key}</TextSmall>
            </Box>
          );
        }
      })}
    </Box>
  ));
