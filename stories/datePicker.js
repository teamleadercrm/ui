import React from 'react';
import PropTable from "./components/propTable";
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs/react";
import { DatePicker } from '../components';
import { DateTime } from 'luxon';
import MomentLocaleUtils from 'react-day-picker/moment';

const languages = ['da', 'de', 'fr', 'en', 'es', 'fi', 'it', 'nl', 'pt', 'pl', 'sv'];
const sizes = ['small', 'medium', 'large'];

const preSelectedDate = DateTime.local().plus({days: 3}).toJSDate();


storiesOf('DatePicker', module)
		.addDecorator((story, context) => withInfo({TableComponent: PropTable})(story)(context))
		.addDecorator(checkA11y)
		.addDecorator(withKnobs)
		.add('Single date', () => {
			const handleOnChange = (selectedDate) => {
				console.log("Selected date", selectedDate);
			};

			return (
					<DatePicker
							locale={select('Locale', languages, 'nl')}
							localeUtils={MomentLocaleUtils}
							numberOfMonths={number('Number of months', 1)}
							onChange={handleOnChange}
							selectedDate={preSelectedDate}
							showOutsideDays={boolean('Show outside days', true)}
							showWeekNumbers={boolean('Show week numbers', true)}
							size={select('Size', sizes, 'medium')}
					/>
			)
		})
