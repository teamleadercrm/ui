import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs/react';
import { ProgressTracker, Island } from '../components';

const steps = ['Draft', 'Book', 'Send invoices', 'Get paid'];
const colors = ['neutral', 'mint', 'aqua', 'violet', 'gold', 'ruby'];
const options = {
  range: true,
  min: 0,
  max: steps.length - 1,
  step: 1,
};

storiesOf('ProgressTracker', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Island],
    })(story)(context),
  )
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Island color={select('Color', colors, 'neutral')} size="small">
      <ProgressTracker
        color={select('Color', colors, 'neutral')}
        currentStep={number('Current step', 1, options)}
        done={boolean('Completed', false)}
      >
        {steps.map((step, index) => <ProgressTracker.ProgressStep label={step} key={index} />)}
      </ProgressTracker>
    </Island>
  ));
