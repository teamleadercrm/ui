import { ComponentStory } from '@storybook/react';
import * as Illustrations from '@teamleader/ui-illustrations';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Box from '../box';
import { TextSmall } from '../typography';
import description from './description.md';

const gridStyles: Record<string, any> = {
  display: 'flex',
  flexWrap: 'wrap',
};

const itemProps: Record<string, any> = {
  alignItems: 'center',
  display: 'inline-flex',
  marginBottom: 3,
  marginRight: 3,
};

const itemStyles: Record<string, any> = {
  width: '480px',
  whiteSpace: 'nowrap',
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

export const _24X24: ComponentStory<typeof Box> = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('24X24'))
      .map((key) => {
        const Illustration = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 24px">
              <Illustration />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_24X24.storyName = '24x24';

export const _36X24: ComponentStory<typeof Box> = () => (
  <Box style={gridStyles}>
    {Object.keys(Illustrations)
      .filter((key) => key.includes('36X24'))
      .map((key) => {
        const Illustration = Illustrations[key];

        return (
          <Box key={key} style={itemStyles} {...itemProps}>
            <Box flex="0 0 36px">
              <Illustration />
            </Box>
            <TextSmall marginLeft={3}>{key}</TextSmall>
          </Box>
        );
      })}
  </Box>
);

_36X24.storyName = '36x24';

export const _48X48: ComponentStory<typeof Box> = () => (
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

_48X48.storyName = '48x48';

export const _60X60: ComponentStory<typeof Box> = () => (
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

_60X60.storyName = '60x60';

export const _84X84: ComponentStory<typeof Box> = () => (
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

_84X84.storyName = '84x84';

export const _90X90: ComponentStory<typeof Box> = () => (
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

_90X90.storyName = '90x90';

export const _120X120: ComponentStory<typeof Box> = () => (
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

_120X120.storyName = '120x120';

export const _240X240: ComponentStory<typeof Box> = () => (
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

_240X240.storyName = '240x240';
