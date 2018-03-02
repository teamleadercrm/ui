import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Heading2,
  Heading3,
  Heading4,
  Link,
  StatusLabel,
  TextBody,
  TextDisplay,
  TextSmall,
  Tooltip
} from '../components';
import { IconHelpBadgedMediumOutline, IconUserSmallOutline } from '@teamleader/ui-icons';

const buttonLevels = ['outline', 'secondary', 'primary', 'destructive'];
const colors = ['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'inverse'];
const sizes = ['small', 'medium'];
const positions = ['horizontal', 'vertical', 'top', 'bottom', 'left', 'right'];

const TooltippedButton = Tooltip(Button);
const TooltippedBadge = Tooltip(Badge);
const TooltippedLink = Tooltip(Link);
const TooltippedStatusLabel = Tooltip(StatusLabel);
const TooltippedStrong = Tooltip('strong');

const textBodyTooltipContent = <TextBody>I am body sized tooltip text</TextBody>;
const textSmallTooltipContent = <TextSmall>I am small sized tooltip text</TextSmall>;

storiesOf('Tooltip', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .add('colors', () => (
    <Box>
      {colors.map((color, index) => {
        return (
          <TextBody key={index} marginTop={4}>
            <TooltippedStrong
              tooltip={textSmallTooltipContent}
              tooltipColor={color}
            >
              Tooltip {color}
            </TooltippedStrong>
          </TextBody>
        )
      })}
    </Box>
  ))
  .add('sizes', () => (
    <Box>
      {sizes.map((size, index) => {
        return (
          <TextBody key={index} marginTop={4}>
            <TooltippedStrong
              tooltip={textSmallTooltipContent}
              tooltipSize={size}
            >
              Tooltip {size}
            </TooltippedStrong>
          </TextBody>
        )
      })}
    </Box>
  ))
  .add('positions', () => (
    <Box>
      {positions.map((position, index)=> {
        return (
          <TextBody key={index} marginTop={4}>
            <TooltippedStrong
              tooltip={textSmallTooltipContent}
              tooltipPosition={position}
            >
              Tooltip {position}
            </TooltippedStrong>
          </TextBody>
        )
      })}
    </Box>
  ))
  .add('with Icon', () => (
    <TextBody>
      <TooltippedStrong
        tooltip={textSmallTooltipContent}
        tooltipIcon={<IconHelpBadgedMediumOutline />}
      >
        Hover me
      </TooltippedStrong>
    </TextBody>
  ))
  .add('from Badge', () => (
    <Box>
      <Heading2 marginTop={4}>
        I'm a Heading 2 with a{' '}
        <TooltippedBadge
          icon={<IconUserSmallOutline />}
          tooltip={textSmallTooltipContent}
        >
          hover me
        </TooltippedBadge>{' '}
        tooltip action
      </Heading2>

      <Heading3 marginTop={4}>
        I'm a Heading 3 with a{' '}
        <TooltippedBadge
          icon={<IconUserSmallOutline />}
          tooltip={textSmallTooltipContent}
        >
          hover me
        </TooltippedBadge>{' '}
        tooltip action
      </Heading3>

      <Heading4 marginTop={4}>
        I'm a Heading 4 with a{' '}
        <TooltippedBadge
          icon={<IconUserSmallOutline />}
          inverse
          tooltip={textSmallTooltipContent}
          tooltipColor="inverse"
        >
          hover me
        </TooltippedBadge>{' '}
        tooltip action
      </Heading4>

      <TextDisplay marginTop={4}>
        I'm display text with a{' '}
        <TooltippedBadge tooltip={textSmallTooltipContent}>
          hover me
        </TooltippedBadge>{' '}
        tooltip action
      </TextDisplay>

      <TextBody marginTop={4}>
        I'm body text with a{' '}
        <TooltippedBadge
          icon={<IconUserSmallOutline />}
          inverse
          tooltip={textSmallTooltipContent}
          tooltipColor="inverse"
        >
          hover me
        </TooltippedBadge>{' '}
        tooltip action
      </TextBody>

      <TextSmall marginTop={4}>
        I'm small text with a <TooltippedBadge tooltip={textSmallTooltipContent}>hover me</TooltippedBadge>{' '}
        tooltip action
      </TextSmall>
    </Box>
  ))
  .add('from Button', () => (
    <ButtonGroup>
      {buttonLevels.map((level, index) => {
        return (
          <TooltippedButton key={index} tooltip={textBodyTooltipContent} level={level}>
            Hover me
          </TooltippedButton>
        )
      })}
    </ButtonGroup>
  ))
  .add('from Link', () => (
    <TooltippedLink tooltip={textBodyTooltipContent} href="#" inherit={false}>Hover me</TooltippedLink>
  ))
  .add('from StatusLabel', () => (
    <TooltippedStatusLabel tooltip={textSmallTooltipContent}>Hover me</TooltippedStatusLabel>
  ))
  .add('from inline elements', () => (
    <TextBody>
      I'm body text with a{' '}
      <TooltippedStrong tooltip={textBodyTooltipContent}>hover me</TooltippedStrong>{' '}
      tooltip action
    </TextBody>
  ));
