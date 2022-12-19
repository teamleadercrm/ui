import React from 'react';
import { render } from '@testing-library/react';
import { LabelValuePair, LabelValuePairGroup } from '..';

describe('Component - LabelValuePair', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <LabelValuePairGroup>
        <LabelValuePair>
          <LabelValuePair.Label>Label</LabelValuePair.Label>
          <LabelValuePair.Value>Value</LabelValuePair.Value>
        </LabelValuePair>
      </LabelValuePairGroup>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
