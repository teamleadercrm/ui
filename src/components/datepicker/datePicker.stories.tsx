import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { DatePicker, DatePickerInput, Toggle } from '../../index';
import { DateTime } from 'luxon';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SIZES } from '../../constants';

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
type Size = Exclude<typeof SIZES[number], 'tiny' | 'smallest' | 'hero' | 'fullscreen'>;

const optionalSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  none: null,
};

const customFormatDate = (date: Date, locale: string) => {
  return DateTime.fromJSDate(date).setLocale(locale).toLocaleString(DateTime.DATETIME_HUGE);
};

const inputPlaceholderToday = DateTime.fromJSDate(new Date())
  .setLocale(select('Locale', languages, 'nl-BE'))
  .toLocaleString(DateTime.DATE_SHORT);

const preSelectedDate = DateTime.local().plus({ days: 3 }).toJSDate();

export default {
  component: DatePicker,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/DatePicker'),
} as ComponentMeta<typeof DatePicker>;

export const singleDate: ComponentStory<typeof DatePicker> = (args) => {
  const handleOnChange = (selectedDate: Date) => {
    console.log('Selected date', selectedDate);
  };

  return <DatePicker onChange={handleOnChange} selectedDate={preSelectedDate} {...args} />;
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

export const inputSingleDate: ComponentStory<typeof DatePickerInput> = () => {
  const handleOnChange = (selectedDate: Date) => {
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
      size={select('Size', sizes, 'medium') as Size}
      inputSize={select('Input size', optionalSizes, null) as Size}
      datePickerSize={select('Date picker size', optionalSizes, null) as Size}
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
