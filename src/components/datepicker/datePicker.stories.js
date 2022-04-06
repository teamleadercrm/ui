import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { DatePicker, DatePickerInput, Toggle } from '../../index';
import { DateTime } from 'luxon';

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

const preSelectedDate = DateTime.local().plus({ days: 3 }).toJSDate();

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

singleDate.storyName = 'Single date';
singleDate.parameters = {
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

inputSingleDate.storyName = 'Input single date';
inputSingleDate.parameters = {
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
};
