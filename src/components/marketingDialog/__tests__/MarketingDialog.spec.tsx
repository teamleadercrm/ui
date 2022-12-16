import React from 'react';
import { render } from '@testing-library/react';
import MarketingDialog from '../';

describe('Component - Dialog', () => {
  it('renders', async () => {
    const screen = render(
      <MarketingDialog
        active
        title="Dundler Mifflin"
        subtitle="Michael Scott"
        graphic={<img src="https://foobar.com/michael_scott.png" />}
        primaryAction={{
          label: 'Confirm',
        }}
        secondaryAction={{
          label: 'Cancel',
        }}
        onCloseClick={() => {}}
        onOverlayClick={() => {}}
        onEscKeyDown={() => {}}
        body={<>foobar</>}
      />,
    );
    expect(screen.baseElement).toMatchSnapshot();
  });
});
