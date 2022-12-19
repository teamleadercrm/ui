import React from 'react';
import { render } from '@testing-library/react';
import WysiwygEditor from '..';

describe('Component - WysiwygEditor', () => {
  it('renders', async () => {
    const screen = render(<WysiwygEditor data-testid="editor" />);
    expect(screen.container.querySelector('[data-teamleader-ui="wysiwyg-editor"]')).toBeVisible();
  });
});
