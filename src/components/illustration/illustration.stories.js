import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import * as Illustrations from '@teamleader/ui-illustrations';
import { Box, TextSmall } from '../..';
import description from './description.md';

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

export default {
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Illustration'),
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const _24X24 = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('24X24'))
      .map((key) => {
        const IllustrationToRender = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 24px">
              <IllustrationToRender />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_24X24.story = {
  name: '24x24',
};

export const _36X24 = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('36X24'))
      .map((key) => {
        const IllustrationToRender = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 36px">
              <IllustrationToRender />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_36X24.story = {
  name: '36x24',
};

export const _48X48 = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('48X48'))
      .map((key) => {
        const IllustrationToRender = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 48px">
              <IllustrationToRender />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_48X48.story = {
  name: '48x48',
};

export const _60X60 = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('60X60'))
      .map((key) => {
        const IllustrationToRender = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 60px">
              <IllustrationToRender />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_60X60.story = {
  name: '60x60',
};

export const _84X84 = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('84X84'))
      .map((key) => {
        const IllustrationToRender = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 84px">
              <IllustrationToRender />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_84X84.story = {
  name: '84x84',
};

export const _90X90 = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('90X90'))
      .map((key) => {
        const IllustrationToRender = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 90px">
              <IllustrationToRender />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_90X90.story = {
  name: '90x90',
};

export const _120X120 = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('120X120'))
      .map((key) => {
        const IllustrationToRender = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 120px">
              <IllustrationToRender />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_120X120.story = {
  name: '120x120',
};

export const _240X240 = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('240X240'))
      .map((key) => {
        const IllustrationToRender = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 240px">
              <IllustrationToRender />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_240X240.story = {
  name: '240x240',
};
