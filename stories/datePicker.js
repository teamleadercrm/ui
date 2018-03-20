import React from 'react';
import PropTable from "./components/propTable";
import { Store, State } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs/react";
import { DatePicker, DatePickerInput, DatePickerInputRange, DatePickerRange, Label } from '../components';

const sizes = ['small', 'medium', 'large'];

const basicStore = new Store({
  selectedDays: undefined,
});

storiesOf('DatePicker', module)
  .addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const handleDayClick = (day) => {
      basicStore.set({ selectedDays: day });
    };

    return (
      <State store={basicStore}>
        <DatePicker
          numberOfMonths={number('Number of months', 1)}
          onDayClick={handleDayClick}
          showOutsideDays={boolean('Show outside days', true)}
          showWeekNumbers={boolean('Show week numbers', true)}
          size={select('Size', sizes, 'medium')}
        />
      </State>
    )
  })
  .add('Range onClick', () => {
    const handleOnChange = (selectedRange) => {
      console.log("Selected range", selectedRange);
    };

    return (
      <DatePickerRange
        numberOfMonths={number('Number of months', 2)}
        onChange={handleOnChange}
        showOutsideDays={boolean('Show outside days', true)}
        showWeekNumbers={boolean('Show week numbers', true)}
        size={select('Size', sizes, 'medium')}
      />
    )
  })
  .add('Date input', () => {
    const handleDayClick = (day) => {
      basicStore.set({ selectedDays: day });
    };

    return (
      <State store={basicStore}>
        <DatePickerInput
          numberOfMonths={number('Number of months', 1)}
          onDayClick={handleDayClick}
          showOutsideDays={boolean('Show outside days', true)}
          showWeekNumbers={boolean('Show week numbers', true)}
          size={select('Size', sizes, 'medium')}
        />
      </State>
    )
  })
  .add('Date input range', () => {
    const handleOnChange = (selectedRange) => {
      console.log("Selected range", selectedRange);
    };

    return (
      <DatePickerInputRange
        dayPickerProps={{
          numberOfMonths: number('Number of months', 2),
          showOutsideDays: boolean('Show outside days', true),
          showWeekNumbers: boolean('Show week numbers', true)
        }}
        placeholder="D/M/YYYY"
        onChange={handleOnChange}
        size={select('Size', sizes, 'medium')}
      />
      )
    }
  )
  .add('With label', () => {
    const handleOnChange = (selectedDays) => {
      console.log("selectedDays", selectedDays);
    };

    return (
      <Label
        size={select('Size', sizes, 'medium')}
      >
        Date
        <DatePickerInputRange
          dayPickerProps={{
            numberOfMonths: number('Number of months', 2),
            showOutsideDays: boolean('Show outside days', true),
            showWeekNumbers: boolean('Show week numbers', true)
          }}
          placeholder="D/M/YYYY"
          onChange={handleOnChange}
        />
      </Label>
    )
  });
