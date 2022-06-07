import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import isComponentOfType from '../utils/is-component-of-type';
import Box from '../box';
import Label from './Label';
import Value from './Value';

interface LabelValuePairProps {
  alignValue: 'left' | 'right';
  children: ReactNode;
  inline: boolean;
  label: string | ReactNode;
}

const LabelValuePair = ({ alignValue = 'left', children, inline = true, label, ...others }: LabelValuePairProps) => (
  <Box {...others} display="flex" flexDirection={inline ? 'row' : 'column'} marginBottom={inline ? 2 : 3}>
    {React.Children.map(children, (child) => {
      if (isComponentOfType(Label, child) && React.isValidElement(child)) {
        return React.cloneElement(child, { inline, ...child.props });
      }

      if (isComponentOfType(Value, child) && React.isValidElement(child)) {
        return React.cloneElement(child, {
          justifyContent: alignValue === 'left' ? 'flex-start' : 'flex-end',
          paddingVertical: inline ? 1 : 0,
          textAlign: alignValue,
          ...child.props,
        });
      }
    })}
  </Box>
);

LabelValuePair.Label = Label;
LabelValuePair.Label.displayName = 'LabelValuePair.Label';
LabelValuePair.Value = Value;
LabelValuePair.Value.displayName = 'LabelValuePair.Value';

LabelValuePair.propTypes = {
  alignValue: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

LabelValuePair.defaultProps = {
  alignValue: 'left',
  inline: true,
};

export default LabelValuePair;
