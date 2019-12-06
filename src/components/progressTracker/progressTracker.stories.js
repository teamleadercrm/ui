import React from 'react';
import { number, boolean } from '@storybook/addon-knobs/react';
import { ProgressTracker, Island } from '../../index';

const steps = ['Draft', 'Book', 'Send invoices', 'Get paid'];
const options = {
  range: true,
  min: 0,
  max: steps.length - 1,
  step: 1,
};

export default {
  title: 'ProgressTracker',

  parameters: {
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
