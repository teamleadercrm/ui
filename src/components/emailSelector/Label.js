import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import theme from './theme.css';
import { selectContentEditable } from './utils';
import Tag from '../tag';
import Link from '../link';
import Box from '../box';

const Label = ({ option, editing, invalid, index, onClick, onFocus, onBlur, onRemove }) => {
  const [content, setContent] = useState(option.email);
  const ref = useRef();

  useEffect(() => {
    if (editing) {
      setContent(option.email);
      selectContentEditable(ref.current);
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

  if (editing) {
    return (
      <>
        <Box
          contentEditable
          suppressContentEditableWarning
          tabIndex={0}
          className={theme['label--editing']}
          ref={ref}
          onInput={onChange}
          onBlur={onTagBlur}
        >
          {option.email}
        </Box>
      </>
    );
  }

  return (
    <Tag
      className={invalid ? theme['label--error'] : undefined}
      margin={1}
      marginRight={2}
      onFocus={onTagFocus}
      onRemoveClick={onRemove && onTagRemove}
    >
      <Link element="button" className={theme['label-text']} inherit={false} onClick={onTagClick}>
        {option.label || option.email}
      </Link>
    </Tag>
  );
};

Label.propTypes = {
  option: PropTypes.shape({
    email: PropTypes.string.isRequired,
    label: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  editing: PropTypes.bool,
  invalid: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Label;
