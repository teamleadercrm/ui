import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { StatusBullet, TextBody } from '../src';

const colors = ['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral'];
const sizes = ['small', 'medium'];

export default {
  title: 'Status Bullets',

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
