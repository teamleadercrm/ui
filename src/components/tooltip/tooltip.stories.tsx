import { IconHelpBadgedMediumOutline } from '@teamleader/ui-icons';
import React from 'react';
import { LARGE, MEDIUM, SMALL } from '../../constants/sizes';
import { Badge, Button, Link, StatusLabel, TextBody, TextDisplay, TextSmall, Tooltip } from '../../index';
import { AllowedColor, AllowedSize, POSITIONS, TooltipProps } from './Tooltip';

const sizes: AllowedSize[] = [SMALL, MEDIUM, LARGE];
const colors: AllowedColor[] = ['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'inverse'];

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
};
const tooltipArgTypes = {
  tooltipColor: {
    control: 'select',
    options: colors,
  },
  tooltipPosition: {
    control: 'select',
    options: POSITIONS,
  },
  tooltipSize: {
    control: 'select',
    options: sizes,
  },
  tooltipActive: {
    control: 'select',
    options: [undefined, true, false],
  },
};

export default {
  component: Tooltip,
  title: 'Low level blocks / Tooltip',
  parameters: {
    info: {
      propTablesExclude: [TextSmall, TextDisplay, TextBody],
    },
  },
};

export const basic = (args: TooltipProps) => (
  <TooltippedButton {...args} tooltip={textBodyTooltipContent}>
    Hover me to see a tooltip
  </TooltippedButton>
);

basic.args = defaultTooltipProps;
basic.argTypes = tooltipArgTypes;

export const withIcon = (args: TooltipProps) => (
  <TextDisplay>
    <TooltippedStrong {...args} tooltip={textSmallTooltipContent} tooltipIcon={<IconHelpBadgedMediumOutline />}>
      Hover me
    </TooltippedStrong>
  </TextDisplay>
);

withIcon.args = defaultTooltipProps;
withIcon.argTypes = tooltipArgTypes;

export const fromBadge = (args: TooltipProps) => (
  <TextDisplay>
    I'm display text with a{' '}
    <TooltippedBadge {...args} tooltip={textSmallTooltipContent}>
      Hover me
    </TooltippedBadge>{' '}
    tooltip action
  </TextDisplay>
);

fromBadge.args = defaultTooltipProps;
fromBadge.argTypes = tooltipArgTypes;

export const fromButton = (args: TooltipProps) => (
  <TooltippedButton {...args} tooltip={textBodyTooltipContent}>
    Hover me
  </TooltippedButton>
);

fromButton.args = defaultTooltipProps;
fromButton.argTypes = tooltipArgTypes;

export const fromLink = (args: TooltipProps) => (
  <TooltippedLink {...args} tooltip={textBodyTooltipContent} href="#" inherit={false}>
    Hover me
  </TooltippedLink>
);

fromLink.args = defaultTooltipProps;
fromLink.argTypes = tooltipArgTypes;

export const fromStatusLabel = (args: TooltipProps) => (
  <TooltippedStatusLabel {...args} tooltip={textSmallTooltipContent}>
    Hover me
  </TooltippedStatusLabel>
);

fromStatusLabel.storyName = 'From StatusLabel';
fromStatusLabel.args = defaultTooltipProps;
fromStatusLabel.argTypes = tooltipArgTypes;

export const fromInlineElements = (args: TooltipProps) => (
  <TextBody>
    I'm body text with a{' '}
    <TooltippedStrong {...args} tooltip={textBodyTooltipContent}>
      Hover me
    </TooltippedStrong>{' '}
    tooltip action
  </TextBody>
);

fromInlineElements.storyName = 'From inline elements';
fromInlineElements.args = defaultTooltipProps;
fromInlineElements.argTypes = tooltipArgTypes;
