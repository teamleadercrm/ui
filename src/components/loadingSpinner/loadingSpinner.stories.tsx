import { ComponentMeta } from '@storybook/react';
import React from 'react';
import LoadingSpinner, { LoadingSpinnerProps } from './LoadingSpinner';

export default {
  component: LoadingSpinner,
  title: 'Low level blocks / Loading spinner',
} as ComponentMeta<typeof LoadingSpinner>;

export const DefaultStory = (args: LoadingSpinnerProps) => <LoadingSpinner {...args} />;
