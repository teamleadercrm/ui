import React from 'react';
import { render } from '@testing-library/react';
import OverviewPage from '../OverviewPage';

describe('Component - OverviewPage', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <OverviewPage>
        <OverviewPage.Header title="Dundler Mifflin" />
        <OverviewPage.Body>The body</OverviewPage.Body>
      </OverviewPage>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
