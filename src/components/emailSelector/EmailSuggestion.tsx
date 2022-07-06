import React from 'react';

import Box from '../box';
import { BoxProps } from '../box/Box';
import Avatar from '../avatar';
import { TextBody } from '../typography';
import { Suggestion } from './types';
import theme from './theme.css';
import { GenericComponent } from '../../@types/types';

interface EmailSuggestionProps extends Omit<BoxProps, 'ref'> {
  suggestion: Suggestion;
  selected: boolean;
}

const EmailSuggestion: GenericComponent<EmailSuggestionProps> = ({ suggestion, selected, ...rest }) => {
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

export default EmailSuggestion;
