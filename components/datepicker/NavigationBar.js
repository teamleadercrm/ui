import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { IconButton } from '../button';
import {
	IconArrowLeftMediumOutline,
	IconArrowRightMediumOutline,
	IconArrowLeftSmallOutline,
	IconArrowRightSmallOutline,
} from '@teamleader/ui-icons';

const NavigationBar = ({ nextMonth, previousMonth, onPreviousClick, onNextClick, className, localeUtils, size }) => {
	const months = localeUtils.getMonths();
	const previousMonthButtonLabel = months[previousMonth.getMonth()];
	const nextMonthButtonLabel = months[nextMonth.getMonth()];

	return (
			<Box className={className} display="flex" justifyContent="space-between">
				<IconButton
						icon={size === 'large' ? <IconArrowLeftMediumOutline /> : <IconArrowLeftSmallOutline />}
						onClick={() => onPreviousClick()}
						title={previousMonthButtonLabel}
				/>
				<IconButton
						icon={size === 'large' ? <IconArrowRightMediumOutline /> : <IconArrowRightSmallOutline />}
						onClick={() => onNextClick()}
						title={nextMonthButtonLabel}
				/>
			</Box>
	);
};

NavigationBar.propTypes = {
	className: PropTypes.string,
	localeUtils: PropTypes.object,
	nextMonth: PropTypes.instanceOf(Date),
	previousMonth: PropTypes.instanceOf(Date),
	onNextClick: PropTypes.func,
	onPreviousClick: PropTypes.func,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default NavigationBar;
