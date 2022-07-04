import React from 'react';
import { boolean, number, select } from '@storybook/addon-knobs';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import ProgressTracker from './ProgressTracker';
import ProgressStep from './ProgressStep';
import { COLORS } from '../../index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const steps = ['Draft', 'Book', 'Send invoices', 'Get paid'];

export default {
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'ProgressTracker'),
  component: ProgressTracker,
  subcomponents: { ProgressStep },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=865%3A0',
    },
  },
} as ComponentMeta<typeof ProgressTracker>;

export const DefaultStory: ComponentStory<typeof ProgressTracker> = (args) => (
  <ProgressTracker
    {...args}
    done={boolean('Done', false)}
    currentStep={number('Current step', 1, {
      range: true,
      min: 0,
      max: steps.length - 1,
      step: 1,
    })}
    color={select('Color', COLORS, 'mint')}
    labelPosition={select('Label position', ['top', 'alternating', 'bottom'], 'top')}
  >
    {steps.map((step, index) => (
      <ProgressTracker.ProgressStep
        label={step}
        meta={boolean('Meta labels', true) ? `${10 + index * 3}/12/2020` : undefined}
        key={index}
        onClick={() => console.log('step clicked')}
      />
    ))}
  </ProgressTracker>
);
