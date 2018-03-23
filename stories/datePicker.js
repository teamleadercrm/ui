import React from 'react';
import PropTable from "./components/propTable";
import { Store, State } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs/react";
import { DatePicker, DatePickerInput, DatePickerInputRange, DatePickerRange, Label } from '../components';
import { DateTime } from 'luxon';
import MomentLocaleUtils from 'react-day-picker/moment';

const languages = ['da', 'de', 'fr', 'en', 'es', 'fi', 'it', 'nl', 'pt', 'pl', 'sv'];
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
          locale={select('Locale', languages, 'nl')}
          localeUtils={MomentLocaleUtils}
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
        locale={select('Locale', languages, 'nl')}
        localeUtils={MomentLocaleUtils}
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
          formatDate={date =>  DateTime.fromJSDate(date).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT)}
          bold={boolean('Bold', false)}
          disabled={boolean('Disabled', false)}
          inverse={boolean('Inverse', false)}
          helpText="Pick a date"
          dayPickerProps={{
            locale: select('Locale', languages, 'nl'),
            localeUtils: MomentLocaleUtils,
            numberOfMonths: number('Number of months', 2),
            showOutsideDays: boolean('Show outside days', true),
            showWeekNumbers: boolean('Show week numbers', true)
          }}
          onDayClick={handleDayClick}
          placeholder={DateTime.fromJSDate(new Date()).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT)}
          readOnly={boolean('Read only', false)}
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
        formatDate={date =>  DateTime.fromJSDate(date).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT)}
        bold={boolean('Bold', false)}
        dayPickerProps={{
          locale: select('Locale', languages, 'nl'),
          localeUtils: MomentLocaleUtils,
          numberOfMonths: number('Number of months', 2),
          showOutsideDays: boolean('Show outside days', true),
          showWeekNumbers: boolean('Show week numbers', true)
        }}
        disabled={boolean('Disabled', false)}
        helpText="Pick a start & end date"
        inverse={boolean('Inverse', false)}
        placeholder={DateTime.fromJSDate(new Date()).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT)}
        readOnly={boolean('Read only', false)}
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
        inverse={boolean('Inverse', false)}
        size={select('Size', sizes, 'medium')}
      >
        Date
        <DatePickerInputRange
          formatDate={date =>  DateTime.fromJSDate(date).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT)}
          bold={boolean('Bold', false)}
          dayPickerProps={{
            locale: select('Locale', languages, 'nl'),
            localeUtils: MomentLocaleUtils,
            numberOfMonths: number('Number of months', 2),
            showOutsideDays: boolean('Show outside days', true),
            showWeekNumbers: boolean('Show week numbers', true)
          }}
          disabled={boolean('Disabled', false)}
          helpText="Pick a start & end date"
          placeholder={DateTime.fromJSDate(new Date()).setLocale(select('Locale', languages, 'nl')).toLocaleString(DateTime.DATE_SHORT)}
          readOnly={boolean('Read only', false)}
          onChange={handleOnChange}
        />
      </Label>
    )
  });
