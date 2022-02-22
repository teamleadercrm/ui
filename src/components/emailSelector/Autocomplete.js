import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import Box from '../box';
import { Heading4 } from '../typography';
import EmailSuggestion from './EmailSuggestion';

const Autocomplete = ({ suggestions, highlightedSuggestion, onClick, onHover, renderSuggestion }) => {
  const Component = renderSuggestion;

  return (
    <Box className={cx(uiUtilities['box-shadow-200'], theme['autocomplete'])}>
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

Autocomplete.defaultProps = {
  renderSuggestion: EmailSuggestion,
};

const emailOption = PropTypes.shape({
  email: PropTypes.string.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
});

Autocomplete.propTypes = {
  suggestions: PropTypes.oneOfType([PropTypes.arrayOf(emailOption), PropTypes.object]).isRequired,
  highlightedSuggestion: emailOption,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  renderSuggestion: PropTypes.elementType,
};

export default Autocomplete;
