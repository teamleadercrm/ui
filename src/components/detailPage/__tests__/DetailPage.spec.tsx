import React from 'react';
import { render } from '@testing-library/react';
import DetailPage from '../DetailPage';
import Button from '../../button';

describe('Component - DetailPage', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <DetailPage>
        <DetailPage.Header title="Companies">
          <Button>Add company</Button>
        </DetailPage.Header>
        <DetailPage.Body>The body</DetailPage.Body>
      </DetailPage>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
