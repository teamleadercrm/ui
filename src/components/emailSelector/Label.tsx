import React, { useCallback, useState, useEffect, useRef, useMemo } from 'react';
import uiTypography from '@teamleader/ui-typography';
import cx from 'classnames';

import theme from './theme.css';
import { filterSuggestions, moveSuggestion, selectContentEditable, validateSuggestion } from './utils';
import Tag from '../tag';
import Link from '../link';
import Box from '../box';
import Autocomplete from './Autocomplete';
import Overlay from '../overlay';
import { Suggestion, Suggestions } from './types';
import EmailSuggestion from './EmailSuggestion';
import { GenericComponent } from '../../@types/types';

const ENTER = 'Enter';
const ESCAPE = 'Escape';
const BACKSPACE = 'Backspace';
const UP_ARROW = 'ArrowUp';
const DOWN_ARROW = 'ArrowDown';
const SEMI = ';';
const COMMA = ',';

interface LabelProps {
  option: Suggestion;
  index: number;
  editing?: boolean;
  invalid?: boolean;
  onClick?: (index: number) => void;
  onFocus?: (index: number) => void;
  onBlur?: (index: number, newLabel: Suggestion | { email: string }) => void;
  onRemove?: (index: number) => void;
  onFinish?: (index: number, newLabel: Suggestion | { email: string }) => void;
  suggestions?: Suggestions;
  renderSuggestion?: React.ComponentType<React.ComponentProps<typeof EmailSuggestion>>;
  menuWidth?: number;
  disableRemovalOfFirst?: boolean;
}

const Label: GenericComponent<LabelProps> = ({
  option,
  suggestions = [],
  editing,
  invalid,
  index,
  onClick,
  onFocus,
  onBlur,
  onRemove,
  onFinish,
  renderSuggestion,
  menuWidth,
  disableRemovalOfFirst,
}) => {
  const [content, setContent] = useState(option.email);
  const [autocompleteOpen, setAutocompleteOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const validSuggestions = useMemo(() => filterSuggestions(content, suggestions), [content, suggestions]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(null);

  const hasValidSuggestions =
    autocompleteOpen && (Array.isArray(validSuggestions) ? validSuggestions : Object.keys(validSuggestions)).length > 0;

  useEffect(() => {
    if (editing) {
      setContent(option.email);
      ref.current && selectContentEditable(ref.current);
    }
  }, [editing, option]);

  const onTagClick = useCallback(
    (event) => {
      onClick && onClick(index);
      event.stopPropagation();
      event.preventDefault();
    },
    [index, onClick],
  );

  const onTagFocus = useCallback(() => {
    onFocus && onFocus(index);
  }, [index, onFocus]);

  const onTagRemove = useCallback(
    (event) => {
      onRemove && onRemove(index);
      event.stopPropagation();
      event.preventDefault();
    },
    [index, onRemove],
  );

  const onChange = useCallback(
    (event) => {
      setContent(event.target.innerText);
    },
    [setContent],
  );

  const onTagBlur = useCallback(
    (event) => {
      const trimmedContent = content.trim();
      onBlur && onBlur(index, trimmedContent === option.email ? option : { email: trimmedContent });
      event.stopPropagation();
      event.preventDefault();
    },
    [onBlur, index, option, content],
  );

  const onInputBlur = useCallback(
    (event) => {
      if (event.relatedTarget) {
        onTagBlur(event);
      }
    },
    [onTagBlur],
  );

  const onKeyDown = useCallback(
    (event) => {
      const trimmedContent = content.trim();

      switch (event.key) {
        case ENTER: {
          const newOption =
            selectedSuggestion && validateSuggestion(trimmedContent, selectedSuggestion)
              ? selectedSuggestion
              : trimmedContent === option.email
              ? option
              : { email: trimmedContent };

          onFinish && onFinish(index, newOption);
          event.preventDefault();
          break;
        }

        case COMMA:
        case SEMI:
          onFinish && onFinish(index, trimmedContent === option.email ? option : { email: trimmedContent });
          event.preventDefault();
          break;

        case ESCAPE:
          if (hasValidSuggestions) {
            setAutocompleteOpen(false);
            event.stopPropagation();
            break;
          }

          onFinish && onFinish(index, option);
          break;

        case BACKSPACE:
          if (!event.repeat && content === '' && onRemove && !((index === 0 || index === 1) && disableRemovalOfFirst)) {
            onRemove(index);
          }
          break;

        case UP_ARROW:
          setSelectedSuggestion(moveSuggestion(validSuggestions, selectedSuggestion, -1));
          event.preventDefault();
          break;

        case DOWN_ARROW:
          setSelectedSuggestion(moveSuggestion(validSuggestions, selectedSuggestion, 1));
          event.preventDefault();
          break;

        default:
          if (!autocompleteOpen) {
            setAutocompleteOpen(true);
          }
      }
    },
    [
      onFinish,
      index,
      content,
      option,
      hasValidSuggestions,
      onRemove,
      validSuggestions,
      selectedSuggestion,
      autocompleteOpen,
    ],
  );

  const onSuggestionClick = useCallback(
    (suggestion, event) => {
      onFinish && onFinish(index, suggestion);
      event.stopPropagation();
      event.preventDefault();
    },
    [index, onFinish],
  );

  const onSuggestionHover = useCallback(
    (suggestion) => {
      setSelectedSuggestion(suggestion);
    },
    [setSelectedSuggestion],
  );

  if (editing) {
    return (
      <>
        {hasValidSuggestions && (
          <Overlay active onOverlayClick={onTagBlur} backdrop="" className={theme['label-overlay']} />
        )}
        <Box
          contentEditable
          suppressContentEditableWarning
          tabIndex={0}
          className={cx(theme['label--editing'], uiTypography['text'], uiTypography['text-body'])}
          ref={ref}
          onInput={onChange}
          onKeyDown={onKeyDown}
          onBlur={hasValidSuggestions ? onInputBlur : onTagBlur}
        >
          {option.email}
        </Box>
        {hasValidSuggestions && (
          <Autocomplete
            suggestions={validSuggestions}
            highlightedSuggestion={selectedSuggestion}
            onClick={onSuggestionClick}
            onHover={onSuggestionHover}
            renderSuggestion={renderSuggestion}
            menuWidth={menuWidth}
          />
        )}
      </>
    );
  }

  return (
    <Tag
      className={invalid ? theme['label--error'] : undefined}
      margin={1}
      marginRight={2}
      onFocus={onTagFocus}
      onRemoveClick={!(index === 0 && disableRemovalOfFirst) && onRemove && onTagRemove}
    >
      <Link element="button" className={theme['label-text']} inherit={false} onClick={onTagClick}>
        {option.label || option.email}
      </Link>
    </Tag>
  );
};

export default Label;
