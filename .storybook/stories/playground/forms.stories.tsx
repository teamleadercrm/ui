import React from 'react';
import { Box, Button, ButtonGroup, Input, Label, NumericInput, Textarea } from '../../../src';

export default {
  title: 'Playground / Forms',

  parameters: {
    info: {
      source: false,
      propTables: false,
    },
  },
};

export const forms = () => {
  const inputRef = React.createRef<HTMLElement>();
  const numericInputRef = React.createRef<HTMLElement>();
  const textareaRef = React.createRef<HTMLElement>();

  const focusOnInput = () => {
    inputRef.current?.focus();
  };

  const focusOnNumericInput = () => {
    numericInputRef.current?.focus();
  };

  const focusOnTextarea = () => {
    textareaRef.current?.focus();
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
