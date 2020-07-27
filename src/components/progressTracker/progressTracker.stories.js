import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { number, boolean } from '@storybook/addon-knobs';
import { ProgressTracker, Island } from '../../index';

const steps = ['Draft', 'Book', 'Send invoices', 'Get paid'];
const options = {
  range: true,
  min: 0,
  max: steps.length - 1,
  step: 1,
};

export default {
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'ProgressTracker'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=865%3A0',
    },
    info: {
      propTablesExclude: [Island],
    },
  },
};

export const basic = () => (
  <Island size="small">
    <ProgressTracker currentStep={number('Current step', 1, options)} done={boolean('Completed', false)}>
      {steps.map((step, index) => (
        <ProgressTracker.ProgressStep label={step} key={index} />
      ))}
    </ProgressTracker>
  </Island>
);

export const interactional = () => (
  <Island size="small">
    <ProgressTracker currentStep={number('Current step', 1, options)} done={boolean('Completed', false)}>
      {steps.map((step, index) => (
        <ProgressTracker.ProgressStep label={step} key={index} onClick={() => console.log('step clicked')} />
      ))}
    </ProgressTracker>
  </Island>
);
