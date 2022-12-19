import React from 'react';
import { render } from '@testing-library/react';
import ValidationText from '../ValidationText';

describe('Component - ValidationText', () => {
  it('renders nothing when no text is passed', async () => {
    const { asFragment } = render(<ValidationText />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a success text', async () => {
    const { asFragment } = render(<ValidationText success="Success text" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an error text', async () => {
    const { asFragment } = render(<ValidationText error="Error text" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a warning text', async () => {
    const { asFragment } = render(<ValidationText warning="Warning text" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a help text', async () => {
    const { asFragment } = render(<ValidationText warning="Help text" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
