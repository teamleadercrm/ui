import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { IconHelpBadgedMediumOutline } from '@teamleader/ui-icons';
import { Badge, Button, Link, StatusLabel, TextBody, TextDisplay, TextSmall, Tooltip } from '../../index';

const colors = ['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'inverse'];
const sizes = ['small', 'medium', 'large'];
const positions = ['horizontal', 'vertical', 'top', 'bottom', 'left', 'right'];

const TooltippedButton = Tooltip(Button);
const TooltippedBadge = Tooltip(Badge);
const TooltippedLink = Tooltip(Link);
const TooltippedStatusLabel = Tooltip(StatusLabel);
const TooltippedStrong = Tooltip('strong');

const textBodyTooltipContent = (
  <TextBody>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </TextBody>
);
const textSmallTooltipContent = (
  <TextSmall>I am small sized tooltip text with lorem ipsum text and so many more!</TextSmall>
);

const defaultTooltipProps = {
  tooltipColor: 'white',
  tooltipPosition: 'horizontal',
  tooltipSize: 'medium',
  tooltipActive: null,
};
const tooltipArgTypes = {
  tooltipColor: {
    control: 'select',
    options: colors,
  },
  tooltipPosition: {
    control: 'select',
    options: positions,
  },
  tooltipSize: {
    control: 'select',
    options: sizes,
  },
  tooltipActive: {
    control: 'select',
    options: [null, true, false],
  },
};

export default {
  component: Tooltip,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Tooltip'),

  parameters: {
    info: {
      propTablesExclude: [TextSmall, TextDisplay, TextBody],
    },
  },
};

export const basic = (args) => (
  <TooltippedButton
    tooltip={textBodyTooltipContent}
    tooltipColor={args.tooltipColor}
    tooltipPosition={args.tooltipPosition}
    tooltipSize={args.tooltipSize}
    tooltipActive={args.tooltipActive}
  >
    Hover me to see a tooltip
  </TooltippedButton>
);

basic.args = defaultTooltipProps;
basic.argTypes = tooltipArgTypes;

export const withIcon = (args) => (
  <TextDisplay>
    <TooltippedStrong
      tooltip={textSmallTooltipContent}
      tooltipColor={args.tooltipColor}
      tooltipIcon={<IconHelpBadgedMediumOutline />}
      tooltipPosition={args.tooltipPosition}
      tooltipSize={args.tooltipSize}
      tooltipActive={args.tooltipActive}
    >
      Hover me
    </TooltippedStrong>
  </TextDisplay>
);

withIcon.args = defaultTooltipProps;
withIcon.argTypes = tooltipArgTypes;

export const fromBadge = (args) => (
  <TextDisplay>
    I'm display text with a{' '}
    <TooltippedBadge
      tooltip={textSmallTooltipContent}
      tooltipColor={args.tooltipColor}
      tooltipPosition={args.tooltipPosition}
      tooltipSize={args.tooltipSize}
      tooltipActive={args.tooltipActive}
    >
      Hover me
    </TooltippedBadge>{' '}
    tooltip action
  </TextDisplay>
);

fromBadge.args = defaultTooltipProps;
fromBadge.argTypes = tooltipArgTypes;

export const fromButton = (args) => (
  <TooltippedButton
    tooltip={textBodyTooltipContent}
    tooltipColor={args.tooltipColor}
    tooltipPosition={args.tooltipPosition}
    tooltipSize={args.tooltipSize}
    tooltipActive={args.tooltipActive}
  >
    Hover me
  </TooltippedButton>
);

fromButton.args = defaultTooltipProps;
fromButton.argTypes = tooltipArgTypes;

export const fromLink = (args) => (
  <TooltippedLink
    tooltip={textBodyTooltipContent}
    tooltipColor={args.tooltipColor}
    tooltipPosition={args.tooltipPosition}
    tooltipSize={args.tooltipSize}
    tooltipActive={args.tooltipActive}
    href="#"
    inherit={false}
  >
    Hover me
  </TooltippedLink>
);

fromLink.args = defaultTooltipProps;
fromLink.argTypes = tooltipArgTypes;

export const fromStatusLabel = (args) => (
  <TooltippedStatusLabel
    tooltip={textSmallTooltipContent}
    tooltipColor={args.tooltipColor}
    tooltipPosition={args.tooltipPosition}
    tooltipSize={args.tooltipSize}
    tooltipActive={args.tooltipActive}
  >
    Hover me
  </TooltippedStatusLabel>
);

fromStatusLabel.storyName = 'From StatusLabel';
fromStatusLabel.args = defaultTooltipProps;
fromStatusLabel.argTypes = tooltipArgTypes;

export const fromInlineElements = (args) => (
  <TextBody>
    I'm body text with a{' '}
    <TooltippedStrong
      tooltip={textBodyTooltipContent}
      tooltipColor={args.tooltipColor}
      tooltipPosition={args.tooltipPosition}
      tooltipSize={args.tooltipSize}
      tooltipActive={args.tooltipActive}
    >
      Hover me
    </TooltippedStrong>{' '}
    tooltip action
  </TextBody>
);

fromInlineElements.storyName = 'From inline elements';
fromInlineElements.args = defaultTooltipProps;
fromInlineElements.argTypes = tooltipArgTypes;
