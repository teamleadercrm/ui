import React from 'react';
import PropTypes from 'prop-types';

import Box from '../box';
import Avatar from '../avatar';
import { TextBody } from '../typography';
import theme from './theme.css';

const EmailSuggestion = ({ suggestion, selected, ...rest }) => {
  return (
    <Box
      backgroundColor={selected ? 'neutral' : undefined}
      backgroundTint="light"
      display="flex"
      alignItems="center"
      paddingHorizontal={3}
      paddingVertical={2}
      className={theme['autocomplete-option']}
      {...rest}
    >
      <Avatar size="small" id={suggestion.id} fullName={suggestion.label} title={suggestion.label} marginRight={3} />
      <TextBody>{suggestion.email}</TextBody>
      {suggestion.label && (
        <TextBody tint="darkest" color="neutral" marginLeft={1}>
          ({suggestion.label})
        </TextBody>
      )}
    </Box>
  );
};

EmailSuggestion.propTypes = {
  suggestion: PropTypes.shape({
    email: PropTypes.string.isRequired,
    label: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
};

export default EmailSuggestion;
