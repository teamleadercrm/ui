import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs/react';
import { ProgressTracker, Island } from '../src';

const steps = ['Draft', 'Book', 'Send invoices', 'Get paid'];
const options = {
  range: true,
  min: 0,
  max: steps.length - 1,
  step: 1,
};

storiesOf('ProgressTracker', module)
  .addParameters({
    info: {
      propTablesExclude: [Island],
    },
  })
  .add('Basic', () => (
    <Island size="small">
      <ProgressTracker currentStep={number('Current step', 1, options)} done={boolean('Completed', false)}>
        {steps.map((step, index) => <ProgressTracker.ProgressStep label={step} key={index} />)}
      </ProgressTracker>
    </Island>
  ))
  .add('Interactional', () => (
    <Island size="small">
      <ProgressTracker currentStep={number('Current step', 1, options)} done={boolean('Completed', false)}>
        {steps.map((step, index) => (
          <ProgressTracker.ProgressStep label={step} key={index} onClick={() => console.log('step clicked')} />
        ))}
      </ProgressTracker>
    </Island>
  ));
