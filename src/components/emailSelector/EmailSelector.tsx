import cx from 'classnames';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import ValidationText from '../validationText';
import EmailSuggestion from './EmailSuggestion';
import Label from './Label';
import theme from './theme.css';
import { Suggestion, Suggestions } from './types';
import { excludeSuggestions } from './utils';

export interface EmailSelectorProps extends Omit<BoxProps, 'ref' | 'onBlur' | 'onFocus'> {
  error?: boolean | string;
  warning?: boolean | string;
  defaultSelection?: Suggestion[];
  suggestions?: Suggestions;
  validator?: (option: Suggestion) => boolean | string | undefined;
  onChange?: (selection: Suggestion[]) => void;
  onBlur?: (event?: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  id?: string;
  renderSuggestion?: React.ComponentType<React.ComponentProps<typeof EmailSuggestion>>;
  menuFullWidth?: boolean;
  disableRemovalOfFirst?: boolean;
}

const EmailSelector: GenericComponent<EmailSelectorProps> = ({
  error,
  defaultSelection,
  validator,
  onChange,
  onBlur,
  onFocus,
  id,
  suggestions,
  renderSuggestion,
  warning,
  menuFullWidth,
  disableRemovalOfFirst,
  ...rest
}) => {
  const ref = useRef<HTMLElement>(null);
  const inputRef = useRef(null);

  const validateLabel = useCallback(
    (option: Suggestion) => ({
      ...option,
      valid: validator ? validator(option) === true : undefined,
    }),
    [validator],
  );
  const [selection, setSelection] = useState<Suggestion[]>(
    Array.isArray(defaultSelection) ? defaultSelection.map(validateLabel) : [],
  );
  const [editingLabel, setEditingLabel] = useState<number | null>(null);
  const [internalWarning, setInternalWarning] = useState<boolean | string>(false);

  const validSuggestions = useMemo(() => {
    if (!suggestions) {
      return [];
    }

    return excludeSuggestions(selection, suggestions);
  }, [suggestions, selection]);

  const changeHandler = useCallback(
    (selection: Suggestion[]) => {
      onChange && onChange(selection.filter((selection) => selection.email.trim() !== ''));
    },
    [onChange],
  );

  const onLabelClick = useCallback(
    (index: number) => {
      !disableRemovalOfFirst && setEditingLabel(index);
      setSelection(selection.filter((selection, i) => i <= index || selection.email.trim() !== ''));
    },
    [setEditingLabel, setSelection, selection],
  );

  const createNewLabel = (selection: Suggestion[]) => {
    const newSelection = selection.filter((selection) => selection.email.trim() !== '');
    newSelection.push({ email: '' });
    setSelection(newSelection);
    setEditingLabel(newSelection.length - 1);
  };

  const onUpdateLabel = useCallback(
    (index: number, newLabel?: Suggestion | { email: string }) => {
      const newSelection = [...selection];

      if (!newLabel || newLabel.email.trim() === '') {
        newSelection.splice(index, 1);
        setSelection(newSelection);
        setEditingLabel(null);
        onBlur && onBlur();
      } else {
        const result = validator ? validator(newLabel) : true;
        if (result === false) {
          setInternalWarning(true);
          return false;
        }
        if (typeof result === 'string') {
          setInternalWarning(result);
          return false;
        }

        newSelection.splice(index, 1, validateLabel(newLabel));
        createNewLabel(newSelection);
      }

      setInternalWarning(false);
      changeHandler(newSelection);
      return true;
    },
    [selection, changeHandler, onBlur, validator, validateLabel],
  );

  const onBlurLabel = useCallback(
    (index: number, newLabel?: Suggestion | { email: string }) => {
      const newSelection = [...selection];

      if (!newLabel || newLabel.email.trim() === '') {
        newSelection.splice(index, 1);
      } else {
        newSelection.splice(index, 1, validateLabel(newLabel));
      }

      setInternalWarning(false);
      setSelection(newSelection);
      setEditingLabel(null);
      onBlur && onBlur();
      changeHandler(newSelection);
    },
    [selection, onBlur, changeHandler, validateLabel],
  );

  const onClick = useCallback(() => {
    if (editingLabel !== null || (selection.length > 0 && selection[selection.length - 1].email.trim() === '')) {
      return;
    }

    createNewLabel(selection);
  }, [selection, editingLabel]);

  const onInputFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (editingLabel === null && event.target === inputRef.current) {
        createNewLabel(selection);
      }
    },
    [selection, editingLabel],
  );

  const onInputBlur = useCallback(
    (event: React.FocusEvent<HTMLElement>) => {
      if (
        event.relatedTarget &&
        (!ref.current?.contains(event.relatedTarget) || event.relatedTarget === inputRef.current)
      ) {
        setInternalWarning(false);
        setSelection(selection.filter((selection) => selection.email.trim() !== ''));
        setEditingLabel(null);
        onBlur && onBlur(event);
      }
    },
    [selection, onBlur],
  );

  const onTagFocus = useCallback(() => {
    setSelection(selection.filter((selection) => selection.email.trim() !== ''));
    setEditingLabel(null);
  }, [selection, setSelection, setEditingLabel]);

  const onRemoveHandler = useCallback(
    (index: number) => {
      if (editingLabel !== index && selection[index].email !== '') {
        onUpdateLabel(index);
        return;
      }

      if (index > 0) {
        const newSelection = [...selection];
        newSelection[index] = { email: '' };
        newSelection.splice(index - 1, 1);
        setSelection(newSelection);
        setEditingLabel(index - 1);
        changeHandler(newSelection);
      }
    },
    [editingLabel, selection, onUpdateLabel, changeHandler],
  );
  const displayedWarning = warning ?? internalWarning;
  return (
    <>
      <Box
        ref={ref}
        className={cx(theme['label-input'], {
          [theme['label-input--warning']]: displayedWarning,
          [theme['label-input--error']]: error,
          [theme['label-input--active']]: editingLabel !== null,
        })}
        onClick={onClick}
        onBlur={onInputBlur}
        onFocus={onFocus}
        {...rest}
      >
        {selection?.map((option, i) => (
          <Label
            key={i}
            index={i}
            option={option}
            editing={editingLabel === i}
            invalid={option.valid === false}
            onClick={onLabelClick}
            onFinish={onUpdateLabel}
            onFocus={onTagFocus}
            onBlur={onBlurLabel}
            onRemove={onRemoveHandler}
            suggestions={validSuggestions}
            renderSuggestion={renderSuggestion}
            disableRemovalOfFirst={disableRemovalOfFirst}
            {...(menuFullWidth && {
              menuWidth: ref.current?.offsetWidth,
            })}
          />
        ))}
        {(editingLabel === null || selection[editingLabel].email !== '') && (
          <Box className={theme['label-input-focuser']} element="input" id={id} ref={inputRef} onFocus={onInputFocus} />
        )}
      </Box>
      <ValidationText warning={displayedWarning} error={!displayedWarning && error} />
    </>
  );
};

export default EmailSelector;
