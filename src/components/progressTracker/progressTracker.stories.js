import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import ProgressTracker from './ProgressTracker';
import { COLORS } from '../../index';

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

export const defaultStory = (args) => (
  <ProgressTracker
    done={args.done}
    currentStep={args.currentStep}
    color={args.color}
    labelPosition={args.labelPosition}
  >
    {steps.map((step, index) => (
      <ProgressTracker.ProgressStep
        label={step}
        meta={args.meta ? `${10 + index * 3}/12/2020` : undefined}
        key={index}
        onClick={() => console.log('step clicked')}
      />
    ))}
  </ProgressTracker>
);

defaultStory.args = {
  done: false,
  currentStep: 1,
  color: 'mint',
  labelPosition: 'top',
  meta: true,
};
defaultStory.argTypes = {
  done: {
    name: 'Done',
  },
  currentStep: {
    name: 'Current step',
    control: {
      type: 'number',
      min: 0,
      max: steps.length - 1,
      step: 1,
    },
  },
  color: {
    name: 'Color',
    control: 'select',
    options: COLORS,
  },
  labelPosition: {
    name: 'Label position',
    control: 'select',
    options: ['top', 'alternating', 'bottom'],
  },
  meta: {
    name: 'Meta labels',
  },
};
