import { ComponentMeta } from '@storybook/react';
import React from 'react';
import LoadingBar, { LoadingBarProps } from './LoadingBar';

export default {
  component: LoadingBar,
  title: 'Low level blocks / LoadingBar',
} as ComponentMeta<typeof LoadingBar>;

export const basic = (args: LoadingBarProps) => <LoadingBar {...args} />;
