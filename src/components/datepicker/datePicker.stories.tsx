import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DateTime } from 'luxon';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { DatePicker } from '../../index';

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
  showWeekNumbers: false,
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
