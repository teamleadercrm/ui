import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { select } from '@storybook/addon-knobs';
import { StatusBullet, TextBody } from '../../index';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

export default {
  component: StatusBullet,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Status Bullet'),

  parameters: {
    info: {
      propTablesExclude: [TextBody],
    },
  },
};

export const basic = () => (
  <StatusBullet color={select('Color', colors, 'neutral')} size={select('Size', sizes, 'medium')}>
    <TextBody>label</TextBody>
  </StatusBullet>
);
