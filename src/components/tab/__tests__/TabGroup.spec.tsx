import React from 'react';
import { render } from '@testing-library/react';
import { TitleTab, TabGroup } from '..';

describe('Component - TitleTab', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <TabGroup>
        <TitleTab>Invoices</TitleTab>
        <TitleTab>Credit notes</TitleTab>
      </TabGroup>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
