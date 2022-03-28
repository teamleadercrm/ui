import React from 'react';
import { DialogBase } from '../dialog';
import PropTypes from 'prop-types';
import { Heading3 } from '../typography';
import { Box } from '../box';

const Alert = ({ active, children, title }) => {
  return (
    <DialogBase active={active} scrollable={false} size="small">
      <Box alignItems="center" display="flex" flexDirection="column" padding={4}>
        <Heading3 color="teal" marginBottom={2}>{title}</Heading3>
        {children}
      </Box>
    </DialogBase>
  );
};

Alert.propTypes = {
  /** If true, the alert will show on screen. */
  active: PropTypes.bool,
  /** The content to display inside the alert. */
  children: PropTypes.any,
  /** The title of the alert. */
  title: PropTypes.string,
};

export default Alert;
