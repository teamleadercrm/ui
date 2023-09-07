import React from 'react';
import ProgressTracker from './ProgressTracker';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const steps = ['Draft', 'Book', 'Send invoices', 'Get paid'];

export default {
  title: 'Mid level blocks / ProgressTracker',
  component: ProgressTracker,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=865%3A0',
    },
  },
} as ComponentMeta<typeof ProgressTracker>;

export const Basic: ComponentStory<typeof ProgressTracker> = (args) => (
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

Basic.args = {
  done: false,
  currentStep: 1,
  color: 'mint',
  labelPosition: 'top',
};

export const StepWithDifferentColor: ComponentStory<typeof ProgressTracker> = (args) => (
  <ProgressTracker {...args}>
    {steps.map((step, index) => (
      <ProgressTracker.ProgressStep
        label={step}
        meta={`${10 + index * 3}/12/2020`}
        key={index}
        onClick={() => console.log('step clicked')}
        color={index === 1 ? 'ruby' : undefined}
      />
    ))}
  </ProgressTracker>
);

StepWithDifferentColor.args = {
  done: false,
  currentStep: 1,
  color: 'mint',
  labelPosition: 'top',
};
