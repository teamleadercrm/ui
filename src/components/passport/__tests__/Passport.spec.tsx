import React from 'react';
import { render } from '@testing-library/react';
import Passport from '../Passport';

describe('Component - Passport', () => {
  it('renders', async () => {
    const screen = render(
      <Passport
        title="Dwight Schrute"
        description="Assistant to the regional manager"
        avatar={{ imageUrl: 'https://foobar.com/dwight.png', fullName: 'Dwight Schrute' }}
      />,
    );
    expect(screen.baseElement).toMatchSnapshot();
  });
});
