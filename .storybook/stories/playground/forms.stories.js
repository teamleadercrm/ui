import React from 'react';
import { addStoryInGroup, PLAYGROUND } from '../../utils';
import { Box, Button, ButtonGroup, Input, NumericInput, Label, Textarea } from '../../../src';

export default {
  title: addStoryInGroup(PLAYGROUND, 'Forms'),

  parameters: {
    info: {
      source: false,
      propTables: false,
    },
  },
};

export const forms = () => {
  const inputRef = React.createRef();
  const numericInputRef = React.createRef();
  const textareaRef = React.createRef();

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  const focusOnNumericInput = () => {
    numericInputRef.current.focus();
  };

  const focusOnTextarea = () => {
    textareaRef.current.focus();
  };

  return (
    <Box>
      <ButtonGroup>
        <Button label="Focus the Input" onClick={focusOnInput} />
        <Button label="Focus the NumericInput" onClick={focusOnNumericInput} />
        <Button label="Focus the Textarea" onClick={focusOnTextarea} />
      </ButtonGroup>
      <Box display="flex" marginTop={4}>
        <Label flex={1} marginRight={2}>
          Input
          <Input ref={inputRef} />
        </Label>
        <Label flex={1} marginLeft={2}>
          NumericInput
          <NumericInput ref={numericInputRef} />
        </Label>
      </Box>
      <Label marginTop={4}>
        Textarea
        <Textarea ref={textareaRef} />
      </Label>
    </Box>
  );
};

forms.storyName = 'Form elements';
