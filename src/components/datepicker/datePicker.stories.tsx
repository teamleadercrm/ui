import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { DatePicker, DatePickerInput, Toggle } from '../../index';
import { DateTime } from 'luxon';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePickerInputProps } from './DatePickerInput';
import { DatePickerProps } from './DatePicker';

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

const customFormatDate = (date: Date, locale: string) => {
  return DateTime.fromJSDate(date).setLocale(locale).toLocaleString(DateTime.DATETIME_HUGE);
};

const inputPlaceholderToday = (locale: string = 'nl-BE') => {
  return DateTime.fromJSDate(new Date()).setLocale(locale).toLocaleString(DateTime.DATE_SHORT);
};

const preSelectedDate = DateTime.local().plus({ days: 3 }).toJSDate();

export default {
  component: DatePicker,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/DatePicker'),
} as ComponentMeta<typeof DatePicker>;

export const singleDate: ComponentStory<typeof DatePicker> = (args: DatePickerProps) => {
  const handleOnChange = (selectedDate: Date) => {
    console.log('Selected date', selectedDate);
  };

  return <DatePicker onChange={handleOnChange} selectedDate={preSelectedDate} {...args} />;
};

singleDate.storyName = 'Single date';
singleDate.args = {
  bordered: true,
  className: '',
  modifiers: {
    today: true,
    outside: true,
  },
  selectedDate: new Date(),
  size: 'medium',
  withMonthPicker: true,
  showWeekNumbers: true,
};
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

export const inputSingleDate: ComponentStory<typeof DatePickerInput> = (args: DatePickerInputProps) => {
  const handleOnChange = (selectedDate: Date) => {
    console.log('Selected date', selectedDate);
  };

  return (
    <DatePickerInput
      dayPickerProps={{
        numberOfMonths: args.dayPickerProps?.numberOfMonths,
        showOutsideDays: args.dayPickerProps?.showOutsideDays,
        showWeekNumbers: args.dayPickerProps?.showWeekNumbers,
        withMonthPicker: args.dayPickerProps?.withMonthPicker,
      }}
      footer={<Toggle label="Lorem ipsum dolor sit amet, suspendisse faucibus nunc et pellentesque" size="small" />}
      formatDate={customFormatDate}
      inputProps={{
        bold: args.inputProps?.bold,
        disabled: args.inputProps?.disabled,
        error: args.inputProps?.error,
        helpText: args.inputProps?.helpText,
        inverse: args.inputProps?.inverse,
        warning: args.inputProps?.warning,
        placeholder: inputPlaceholderToday(args.locale),
        readOnly: args.inputProps?.readOnly,
        width: args.inputProps?.width,
      }}
      locale={args.locale}
      onChange={handleOnChange}
      selectedDate={preSelectedDate}
      size={args.size}
      inputSize={args.inputSize}
      datePickerSize={args.datePickerSize}
    />
  );
};

inputSingleDate.storyName = 'Input single date';
inputSingleDate.args = {
  dayPickerProps: {
    numberOfMonths: 1,
    showOutsideDays: true,
    showWeekNumbers: true,
    withMonthPicker: false,
  },
  inputProps: {
    bold: false,
    disable: false,
    error: '',
    helpText: 'Pick a date',
    inverse: false,
    warning: '',
    readonly: false,
    width: '120px',
  },
  locale: 'nl-BE',
  size: 'medium',
  inputSize: undefined,
  datePickerSize: undefined,
};
inputSingleDate.argTypes = {
  locale: {
    control: 'select',
    options: languages,
  },
  size: {
    control: 'select',
    options: sizes,
  },
  inputSize: {
    control: 'select',
    options: optionalSizes,
  },
  datePickerSize: {
    control: 'select',
    options: optionalSizes,
  },
};
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
