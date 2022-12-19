import React from 'react';
import { render } from '@testing-library/react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Monospaced,
  TextBody,
  TextBodyCompact,
  TextDisplay,
  TextSmall,
  UITextDisplay,
  UITextBody,
  UITextSmall,
} from '../';

describe('Component - Typography', () => {
  it('renders', async () => {
    const components = [
      Heading1,
      Heading2,
      Heading3,
      Heading4,
      Heading5,
      Monospaced,
      TextBody,
      TextBodyCompact,
      TextDisplay,
      TextSmall,
      UITextDisplay,
      UITextBody,
      UITextSmall,
    ];

    components.forEach((Component) => {
      const { asFragment } = render(<Component>Michael Scott</Component>);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
