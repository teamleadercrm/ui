import React from 'react';
import PropTable from "./components/propTable";
import { Store, State } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs/react";
import { DateUtils } from "react-day-picker/lib/src";
import { DatePicker } from '../components';

const sizes = ['small', 'medium', 'large'];

const basicStore = new Store({
  selectedDays: undefined,
});

const rangeStore = new Store({
  modifiers: {
    from: undefined,
    to: undefined,
  },
  selectedDays: [
    undefined,
    {
      from: undefined,
      to: undefined,
    }
  ],
});

const handleBasicDayClick = (day) => {
  basicStore.set({ selectedDays: day });
};

const handleRangeDayClick = (day) => {
  const [, stateRange ] = rangeStore.get('selectedDays');
  const range = DateUtils.addDayToRange(day, stateRange);

  rangeStore.set({
    modifiers: {...range},
    selectedDays: [day, range]
  });
};

storiesOf('DatePicker', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <State store={basicStore}>
      <DatePicker
        numberOfMonths={number('Number of months', 1)}
        onDayClick={handleBasicDayClick}
        showOutsideDays={boolean('Show outside days', true)}
        showWeekNumbers={boolean('Show week numbers', true)}
        size={select('Size', sizes, 'medium')}
      />
    </State>
  ))
  .add('Date range', () => (
    <State store={rangeStore}>
      <DatePicker
        range={boolean('Soft highlight range', true)}
        numberOfMonths={number('Number of months', 2)}
        onDayClick={handleRangeDayClick}
        showOutsideDays={boolean('Show outside days', true)}
        showWeekNumbers={boolean('Show week numbers', true)}
        size={select('Size', sizes, 'medium')}
      />
    </State>
  ));
