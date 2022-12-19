import React from 'react';
import { render } from '@testing-library/react';
import { RadioButton, RadioGroup } from '../';

describe('Component - RadioButton', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <RadioGroup value="bar">
        <RadioButton value="foo" label="Foo" />
        <RadioButton value="bar" label="Bar" />
      </RadioGroup>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
