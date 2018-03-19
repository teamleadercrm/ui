import React from 'react';
import PropTable from "./components/propTable";
import { Store, State } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs/react";
import { DateUtils } from "react-day-picker/lib/src";
import { DatePicker, DatePickerInput, DatePickerInputRange, Label } from '../components';

const sizes = ['small', 'medium', 'large'];

const basicStore = new Store({
  selectedDays: undefined,
});

const rangeClickStore = new Store({
  from: undefined,
  to: undefined,
});

const rangeMouseEnterStore = new Store({
  from: null,
  enteredTo: null,
  to: null,
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
    const handleDayClick = (day) => {
      const from = rangeClickStore.get('from');
      const to = rangeClickStore.get('to');
      const range = DateUtils.addDayToRange(day, {from, to});

      rangeClickStore.set({...range});
    };

    const parseState = (state) => {
      return {
        ...state,
        modifiers: {from: state.from, to: state.to},
        selectedDays: [state.from, {from: state.from, to: state.to}],
      };
    };

    return (
      <State store={rangeClickStore} parseState={parseState}>
        <DatePicker
          numberOfMonths={number('Number of months', 2)}
          onDayClick={handleDayClick}
          showOutsideDays={boolean('Show outside days', true)}
          showWeekNumbers={boolean('Show week numbers', true)}
          size={select('Size', sizes, 'medium')}
        />
      </State>
    )
  })
  .add('Range onMouseEnter', () => {
    const handleDayClick = (day) => {
      const from = rangeMouseEnterStore.get('from');
      const to = rangeMouseEnterStore.get('to');

      if (from && to && day >= from && day <= to) {
        resetState();
        return;
      }

      if (isSelectingFirstDay(from, to, day)) {
        rangeMouseEnterStore.set({from: day, to: null, enteredTo: null });
      } else {
        rangeMouseEnterStore.set({from, to: day, enteredTo: day });
      }
    };

    const handleDayMouseEnter = (day) => {
      const from = rangeMouseEnterStore.get('from');
      const to = rangeMouseEnterStore.get('to');

      if (!isSelectingFirstDay(from, to, day)) {
        rangeMouseEnterStore.set({ from, to, enteredTo: day });
      }
    };

    const isSelectingFirstDay = (from, to, day) => {
      const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
      const isRangeSelected = from && to;
      return !from || isBeforeFirstDay || isRangeSelected;
    };

    const parseState = (state) => {
      return {
        ...state,
        modifiers: {from: state.from, to: state.enteredTo},
        selectedDays: [state.from, {from: state.from, to: state.enteredTo}],
      };
    };

    const resetState = () => {
      rangeMouseEnterStore.set({ from: null, enteredTo: null, to: null });
    };

    return (
      <State store={rangeMouseEnterStore} parseState={parseState}>
        <DatePicker
          numberOfMonths={number('Number of months', 2)}
          onDayClick={handleDayClick}
          onDayMouseEnter={handleDayMouseEnter}
          showOutsideDays={boolean('Show outside days', true)}
          showWeekNumbers={boolean('Show week numbers', true)}
          size={select('Size', sizes, 'medium')}
        />
      </State>
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
    const handleOnChange = (selectedDays) => {
      console.log("selectedDays", selectedDays);
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
