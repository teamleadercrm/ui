import { select, withKnobs } from '@storybook/addon-knobs';
import { IconHelpBadgedMediumOutline } from '@teamleader/ui-icons';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
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

export default {
  component: Tooltip,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Tooltip'),
  decorators: [withKnobs],
  parameters: {
    info: {
      propTablesExclude: [TextSmall, TextDisplay, TextBody],
    },
  },
};

export const Basic = () => (
  <TooltippedButton
    tooltip={textBodyTooltipContent}
    tooltipColor={select('Color', colors, 'white')}
    tooltipPosition={select('Position', positions, 'horizontal')}
    tooltipSize={select('Size', sizes, 'medium')}
    tooltipActive={select('Active', [null, true, false], null)}
  >
    Hover me to see a tooltip
  </TooltippedButton>
);

export const WithIcon = () => (
  <TextDisplay>
    <TooltippedStrong
      tooltip={textSmallTooltipContent}
      tooltipColor={select('Color', colors, 'white')}
      tooltipIcon={<IconHelpBadgedMediumOutline />}
      tooltipPosition={select('Position', positions, 'horizontal')}
      tooltipSize={select('Size', sizes, 'medium')}
      tooltipActive={select('Active', [null, true, false], null)}
    >
      Hover me
    </TooltippedStrong>
  </TextDisplay>
);

export const FromBadge = () => (
  <TextDisplay>
    I'm display text with a{' '}
    <TooltippedBadge
      tooltip={textSmallTooltipContent}
      tooltipColor={select('Color', colors, 'white')}
      tooltipPosition={select('Position', positions, 'horizontal')}
      tooltipSize={select('Size', sizes, 'medium')}
      tooltipActive={select('Active', [null, true, false], null)}
    >
      hover me
    </TooltippedBadge>{' '}
    tooltip action
  </TextDisplay>
);

export const FromButton = () => (
  <TooltippedButton
    tooltip={textBodyTooltipContent}
    tooltipColor={select('Color', colors, 'white')}
    tooltipPosition={select('Position', positions, 'horizontal')}
    tooltipSize={select('Size', sizes, 'medium')}
    tooltipActive={select('Active', [null, true, false], null)}
  >
    Hover me
  </TooltippedButton>
);

export const FromLink = () => (
  <TooltippedLink
    tooltip={textBodyTooltipContent}
    tooltipColor={select('Color', colors, 'white')}
    tooltipPosition={select('Position', positions, 'horizontal')}
    tooltipSize={select('Size', sizes, 'medium')}
    tooltipActive={select('Active', [null, true, false], null)}
    href="#"
    inherit={false}
  >
    Hover me
  </TooltippedLink>
);

export const FromStatusLabel = () => (
  <TooltippedStatusLabel
    tooltip={textSmallTooltipContent}
    tooltipColor={select('Color', colors, 'white')}
    tooltipPosition={select('Position', positions, 'horizontal')}
    tooltipSize={select('Size', sizes, 'medium')}
    tooltipActive={select('Active', [null, true, false], null)}
  >
    Hover me
  </TooltippedStatusLabel>
);

FromStatusLabel.storyName = 'From StatusLabel';

export const FromInlineElements = () => (
  <TextBody>
    I'm body text with a{' '}
    <TooltippedStrong
      tooltip={textBodyTooltipContent}
      tooltipColor={select('Color', colors, 'white')}
      tooltipPosition={select('Position', positions, 'horizontal')}
      tooltipSize={select('Size', sizes, 'medium')}
      tooltipActive={select('Active', [null, true, false], null)}
    >
      hover me
    </TooltippedStrong>{' '}
    tooltip action
  </TextBody>
);

FromInlineElements.storyName = 'From inline elements';
