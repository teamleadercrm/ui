import React, { useState } from 'react';
import { addStoryInGroup, MARKETING } from '../../../.storybook/utils';

import MarketingDialog from './MarketingDialog';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../button';

export default {
  component: MarketingDialog,
  title: addStoryInGroup(MARKETING, 'MarketingDialog'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6nbw3mXc6VpIOYrbmUxn8C/Teamleader-Marketing-components?node-id=926%3A5336',
    },
  },
} as ComponentMeta<typeof MarketingDialog>;

export const Basic: ComponentStory<typeof MarketingDialog> = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => {
    setDialogOpen((dialogOpen) => !dialogOpen);
  };

  return (
    <>
      <Button onClick={toggleDialog} label="Open a dialog" />
      <MarketingDialog
        {...props}
        active={dialogOpen}
        onCloseClick={toggleDialog}
        onEscKeyDown={toggleDialog}
        onOverlayClick={toggleDialog}
      />
    </>
  );
};

Basic.args = {
  active: true,
  title: 'Discover our packages for free',
  graphic: <iframe src="https://fast.wistia.net/embed/iframe/f7928s2ype?controlsVisibleOnLoad=false&playButton=true" />,
  subtitle: 'Create multiple quotations',
  body: (
    <>
      Switch to a package and improve your sales process by <strong>creating and sending multiple quotations</strong> in
      one deal.
    </>
  ),
  primaryAction: {
    children: 'Try for free',
    onClick: () => console.log('primaryAction.onClick'),
  },
  secondaryAction: {
    children: 'Read more',
    onClick: () => console.log('secondaryAction.onClick'),
  },
};
