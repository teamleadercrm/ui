import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DateTime } from 'luxon';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { DatePickerInput } from '../../index';

const customFormatDate = (date: Date, locale: string) => {
  return DateTime.fromJSDate(date).setLocale(locale).toLocaleString(DateTime.DATETIME_HUGE);
};

const inputPlaceholderToday = (locale: string = 'nl-BE') => {
  return DateTime.fromJSDate(new Date()).setLocale(locale).toLocaleString(DateTime.DATE_SHORT);
};

const preSelectedDate = DateTime.local().plus({ days: 3 }).toJSDate();

export default {
  component: DatePickerInput,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/DatePickerInput'),
} as ComponentMeta<typeof DatePickerInput>;

export const defaultStory: ComponentStory<typeof DatePickerInput> = (args) => {
  const handleOnChange = (selectedDate: Date | undefined) => {
    console.log('Selected date', selectedDate);
  };

  return <DatePickerInput onChange={handleOnChange} {...args} />;
};

export const clearableInputSingleDate: ComponentStory<typeof DatePickerInput> = () => {
  const handleOnChange = (selectedDate: Date | undefined) => {
    console.log('Selected date', selectedDate);
  };

  return (
    <DatePickerInput
      dayPickerProps={{
        numberOfMonths: 1,
        showOutsideDays: true,
        showWeekNumbers: true,
        withMonthPicker: true,
      }}
      inputProps={{
        helpText: 'Pick a date',
        width: '',
        placeholder: inputPlaceholderToday('nl-BE'),
      }}
      locale="nl-BE"
      size="medium"
      onChange={handleOnChange}
      selectedDate={preSelectedDate}
      clearable
    />
  );
};

export const inputSingleDateWithCustomFormat: ComponentStory<typeof DatePickerInput> = () => {
  const handleOnChange = (selectedDate: Date | undefined) => {
    console.log('Selected date', selectedDate);
  };

  return (
    <DatePickerInput
      dayPickerProps={{
        numberOfMonths: 1,
        showOutsideDays: true,
        showWeekNumbers: true,
        withMonthPicker: false,
      }}
      inputProps={{
        helpText: 'Pick a date',
        width: '',
        placeholder: inputPlaceholderToday('nl-BE'),
      }}
      locale="nl-BE"
      size="medium"
      formatDate={customFormatDate}
      onChange={handleOnChange}
      selectedDate={preSelectedDate}
      typeable={false}
    />
  );
};

export const inputSingleDateWithoutTyping: ComponentStory<typeof DatePickerInput> = () => {
  const handleOnChange = (selectedDate: Date | undefined) => {
    console.log('Selected date', selectedDate);
  };

  return (
    <DatePickerInput
      dayPickerProps={{
        numberOfMonths: 1,
        showOutsideDays: true,
        showWeekNumbers: true,
        withMonthPicker: false,
      }}
      inputProps={{
        helpText: 'Pick a date',
        width: '',
        placeholder: inputPlaceholderToday('nl-BE'),
      }}
      size="medium"
      onChange={handleOnChange}
      selectedDate={preSelectedDate}
    />
  );
};
