import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, number } from '@storybook/addon-knobs/react';
import { ProgressTracker, Island } from '../components';

import { steps } from '../static/progressTracker/steps';

const colors = ['neutral', 'mint', 'aqua', 'violet', 'gold', 'ruby'];
const options = {
  range: true,
  min: 0,
  max: steps.length,
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
  .addDecorator(checkA11y)
  .add('Basic', () => (
    <Island color={select('Color', colors, 'neutral')} size="small">
      <ProgressTracker color={select('Color', colors, 'neutral')} activeStep={number('Active step', 1, options)}>
        {steps.map((step, index) => {
          return <ProgressTracker.ProgressStep label={step.label} key={index} />;
        })}
      </ProgressTracker>
    </Island>
  ));
