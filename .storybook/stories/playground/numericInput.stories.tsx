import React, { ChangeEvent, useState } from 'react';
import { Banner, Box, NumericInput, UITextBody } from '../../../src';
import { useCallback } from '@storybook/addons';

export default {
  title: 'Playground / Forms',

  parameters: {
    info: {
      source: false,
      propTables: false,
    },
  },
};

export const numericInputWithStepper = () => {
  const [value, setValue] = useState(1);

  const min = 1;
  const max = 10;

  const handleChange = (event) => {
    const newValue = (event as ChangeEvent<HTMLInputElement>).currentTarget.valueAsNumber;

    setValue(newValue);
  };

  return (
    <Box style={{ maxWidth: '300px', gap: '12px' }} display="flex" flexDirection="column">
      <NumericInput stepper="connected" min={min} max={max} value={value} onChange={handleChange} />
    </Box>
  );
};

numericInputWithStepper.storyName = 'Numeric Input stepper control';

export const numericInputWithStepperAndCustomStepperStates = () => {
  const [value, setValue] = useState<number>(3);
  const [hasMinErrorVisible, setMinErrorVisible] = useState<boolean>(false);
  const [hasMaxErrorVisible, setMaxErrorVisible] = useState<boolean>(false);

  const min = 1;
  const max = 10;

  const handleChange = useCallback((event) => {
    const newValue = (event as ChangeEvent<HTMLInputElement>).target.valueAsNumber;
    setValue(newValue);
    setMaxErrorVisible(newValue > max);
    setMinErrorVisible(newValue < min);
  });

  const handleDecreaseClick = useCallback(() => {
    setMinErrorVisible(value === min);
    setMaxErrorVisible(false);
  });

  const handleIncreaseClick = useCallback(() => {
    setMaxErrorVisible(value === max);
    setMinErrorVisible(false);
  });

  return (
    <Box style={{ maxWidth: '300px', gap: '12px' }} display="flex" flexDirection="column">
      <NumericInput
        stepper="connected"
        decreaseDisabled={hasMinErrorVisible}
        increaseDisabled={hasMaxErrorVisible}
        onDecreaseMouseDown={handleDecreaseClick}
        onIncreaseMouseDown={handleIncreaseClick}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      {hasMinErrorVisible && (
        <Banner color="ruby">
          <UITextBody>
            Must be {'>='} {min}
          </UITextBody>
        </Banner>
      )}
      {(hasMaxErrorVisible || value === max) && (
        <Banner color={hasMaxErrorVisible ? 'ruby' : 'aqua'}>
          <UITextBody>You have reached the maximum amount ({max})</UITextBody>
        </Banner>
      )}
    </Box>
  );
};

numericInputWithStepperAndCustomStepperStates.storyName = 'Numeric Input stepper control with custom stepper states';
