import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import ProgressTracker from './ProgressTracker';

const steps = ['Draft', 'Book', 'Send invoices', 'Get paid'];

export default {
  component: ProgressTracker,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'ProgressTracker'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=865%3A0',
    },
  },
};

export const DefaultStory = (args) => (
  <ProgressTracker {...args}>
    {steps.map((step, index) => (
      <ProgressTracker.ProgressStep
        label={step}
        meta={`${10 + index * 3}/12/2020`}
        key={index}
        onClick={() => console.log('step clicked')}
      />
    ))}
  </ProgressTracker>
);

DefaultStory.args = {
  currentStep: 1,
};
