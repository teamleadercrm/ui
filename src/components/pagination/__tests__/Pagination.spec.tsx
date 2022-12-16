import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '../Pagination';
import Button from '../../Button';

describe('Component - Pagination', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <Pagination numPages={1337}>
        {({ text, isActive, icon, iconPlacement, className }) => {
          return (
            <Button
              level="link"
              label={text}
              disabled={isActive}
              icon={icon}
              iconPlacement={iconPlacement}
              className={className}
            />
          );
        }}
      </Pagination>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
