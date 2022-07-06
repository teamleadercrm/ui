import React from 'react';
import cx from 'classnames';
import uiUtilities from '@teamleader/ui-utilities';

import theme from './theme.css';
import Box from '../box';
import { Heading4 } from '../typography';
import EmailSuggestion from './EmailSuggestion';
import { Suggestion } from './types';
import { GenericComponent } from '../../@types/types';

interface AutocompleteProps {
  suggestions: Suggestion[] | { [x: string]: Suggestion[] };
  highlightedSuggestion?: Suggestion | null;
  onClick?: (suggestion: Suggestion, event: React.SyntheticEvent) => void;
  onHover?: (suggestion: Suggestion, event: React.SyntheticEvent) => void;
  renderSuggestion?: React.ComponentType<React.ComponentProps<typeof EmailSuggestion>>;
  menuWidth?: number;
}

const Autocomplete: GenericComponent<AutocompleteProps> = ({
  suggestions,
  highlightedSuggestion,
  onClick,
  onHover,
  renderSuggestion = EmailSuggestion,
  menuWidth,
}) => {
  const Component = renderSuggestion;

  return (
    <Box className={cx(uiUtilities['box-shadow-200'], theme['autocomplete'])} style={{ width: menuWidth }}>
      <Box backgroundColor="neutral" backgroundTint="lightest" borderWidth={1} borderRadius="rounded" overflow="hidden">
        {Array.isArray(suggestions)
          ? suggestions.map((suggestion) => (
              <Component
                key={suggestion.id || suggestion.email}
                suggestion={suggestion}
                selected={suggestion === highlightedSuggestion}
                onClick={onClick?.bind(null, suggestion)}
                onMouseOver={onHover?.bind(null, suggestion)}
              />
            ))
          : Object.keys(suggestions).map((key, i) => (
              <Box key={key} borderTopWidth={i > 0 ? 1 : 0}>
                <Heading4 padding={3} paddingTop={4}>
                  {key}
                </Heading4>
                {suggestions[key].map((suggestion) => (
                  <Component
                    key={suggestion.id || suggestion.email}
                    suggestion={suggestion}
                    selected={suggestion === highlightedSuggestion}
                    onClick={onClick?.bind(null, suggestion)}
                    onMouseOver={onHover?.bind(null, suggestion)}
                  />
                ))}
              </Box>
            ))}
      </Box>
    </Box>
  );
};

export default Autocomplete;
