import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { DatePicker, DatePickerRange, DatePickerInput, DatePickerInputRange, Toggle } from '../../index';
import { DateTime } from 'luxon';
import { formatDate, parseDate } from './localeUtils';

const languages = [
  'da-DK',
  'de-DE',
  'en-GB',
  'en-US',
  'es-ES',
  'fi-FI',
  'fr-BE',
  'fr-FR',
  'it-IT',
  'nb-NO',
  'nl-BE',
  'nl-NL',
  'pl-PL',
  'pt-PT',
  'sv-SE',
  'tr-TR',
];
const sizes = ['small', 'medium', 'large'];
const optionalSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  none: null,
};

const customFormatDate = (date, locale) => {
  return DateTime.fromJSDate(date).setLocale(locale).toLocaleString(DateTime.DATETIME_HUGE);
};

const inputPlaceholderToday = DateTime.fromJSDate(new Date())
  .setLocale(select('Locale', languages, 'nl-BE'))
  .toLocaleString(DateTime.DATE_SHORT);
const inputPlaceholderTomorrow = DateTime.fromJSDate(new Date())
  .setLocale(select('Locale', languages, 'nl-BE'))
  .plus({ days: 1 })
  .toLocaleString(DateTime.DATE_SHORT);

const preSelectedDate = DateTime.local().plus({ days: 3 }).toJSDate();
const preSelectedRange = {
  selectedStartDate: DateTime.local().plus({ days: 3 }).toJSDate(),
  selectedEndDate: DateTime.local().plus({ days: 8 }).toJSDate(),
};

export default {
  component: DatePicker,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/DatePicker'),
};

export const singleDate = () => {
  const handleOnChange = (selectedDate) => {
    console.log('Selected date', selectedDate);
  };

  return (
    <DatePicker
      bordered={boolean('bordered', true)}
      locale={select('Locale', languages, 'nl-BE')}
      numberOfMonths={number('Number of months', 1)}
      onChange={handleOnChange}
      selectedDate={preSelectedDate}
      showOutsideDays={boolean('Show outside days', true)}
      showWeekNumbers={boolean('Show week numbers', true)}
      size={select('Size', sizes, 'medium')}
      withMonthPicker={boolean('Use month picker', false)}
    />
  );
};

singleDate.story = {
  name: 'Single date',

  parameters: {
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=980%3A0',
      },
      {
        name: 'Vendor docs',
        type: 'iframe',
        url: 'http://react-day-picker.js.org/api/DayPicker',
      },
    ],
  },
};

export const inputSingleDate = () => {
  const handleOnChange = (selectedDate) => {
    console.log('Selected date', selectedDate);
  };

  return (
    <DatePickerInput
      dayPickerProps={{
        numberOfMonths: number('Number of months', 1),
        showOutsideDays: boolean('Show outside days', true),
        showWeekNumbers: boolean('Show week numbers', true),
        withMonthPicker: boolean('Use month picker', false),
      }}
      footer={<Toggle label="Lorem ipsum dolor sit amet, suspendisse faucibus nunc et pellentesque" size="small" />}
      formatDate={customFormatDate}
      inputProps={{
        bold: boolean('Bold', false),
        disabled: boolean('Disabled', false),
        error: text('Error', ''),
        helpText: text('Help text', 'Pick a date'),
        inverse: boolean('Inverse', false),
        warning: text('Warning', ''),
        placeholder: inputPlaceholderToday,
        readOnly: boolean('Read only', false),
        width: text('Width', '120px'),
      }}
      locale={select('Locale', languages, 'nl-BE')}
      onChange={handleOnChange}
      selectedDate={preSelectedDate}
      size={select('Size', sizes, 'medium')}
      inputSize={select('Input size', optionalSizes, null)}
      datePickerSize={select('Date picker size', optionalSizes, null)}
    />
  );
};

inputSingleDate.story = {
  name: 'Input single date',

  parameters: {
    design: [
      {
        name: 'Figma',
        type: 'figma',
        url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=980%3A0',
      },
      {
        name: 'Vendor docs',
        type: 'iframe',
        url: 'http://react-day-picker.js.org/api/DayPickerInput',
      },
    ],
  },
};

export const range = () => {
  const handleOnChange = (selectedRange) => {
    console.log('Selected range', selectedRange);
  };

  return (
    <DatePickerRange
      bordered={boolean('bordered', true)}
      locale={select('Locale', languages, 'nl-BE')}
      numberOfMonths={number('Number of months', 2)}
      onChange={handleOnChange}
      selectedRange={preSelectedRange}
      showOutsideDays={boolean('Show outside days', false)}
      showWeekNumbers={boolean('Show week numbers', true)}
      size={select('Size', sizes, 'medium')}
    />
  );
};

export const inputRange = () => {
  const handleOnChange = (selectedRange) => {
    console.log('Selected range', selectedRange);
  };

  return (
    <DatePickerInputRange
      bold={boolean('Bold', false)}
      dayPickerProps={{
        locale: select('Locale', languages, 'nl-BE'),
        numberOfMonths: number('Number of months', 2),
        showOutsideDays: boolean('Show outside days', false),
        showWeekNumbers: boolean('Show week numbers', true),
      }}
      dayPickerInputStartDateProps={{
        placeholder: inputPlaceholderToday,
        value: preSelectedRange.selectedStartDate,
      }}
      dayPickerInputEndDateProps={{
        placeholder: inputPlaceholderTomorrow,
        value: preSelectedRange.selectedEndDate,
      }}
      formatDate={formatDate}
      parseDate={parseDate}
      disabled={boolean('Disabled', false)}
      error={text('error', '')}
      helpText={text('helpText', 'Pick a date')}
      warning={text('warning', '')}
      inverse={boolean('Inverse', false)}
      readOnly={boolean('Read only', false)}
      onChange={handleOnChange}
      selectedRange={preSelectedRange}
      size={select('Size', sizes, 'medium')}
      width={text('width', undefined)}
    />
  );
};

inputRange.story = {
  name: 'Input range',
};
