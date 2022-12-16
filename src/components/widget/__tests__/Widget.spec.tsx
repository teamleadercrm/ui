import React from 'react';
import { render } from '@testing-library/react';
import Widget from '../Widget';

describe('Component - Widget', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <Widget>
        <Widget.Header>This is the header</Widget.Header>
        <Widget.Body>This is the body</Widget.Body>
      </Widget>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
