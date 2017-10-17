import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import {
  Button,
  ButtonGroup,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  StatusLabel,
  TextBody,
  TextSmall,
  TextTiny,
  Tooltip,
  TooltipLabel
} from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';
import { IconHelpMediumOutline, IconBuildingMediumOutline, IconMeetingSmallOutline } from '@teamleader/ui-icons';

const buttonLevels = ['outline', 'secondary', 'primary', 'destructive'];
const colors = ['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'inverse'];
const sizes = ['small', 'medium'];
const positions = ['horizontal', 'vertical', 'top', 'bottom', 'left', 'right'];

const TooltippedButton = Tooltip(Button);
const TooltippedLabel = Tooltip(TooltipLabel);
const TooltippedStatusLabel = Tooltip(StatusLabel);
const TooltippedStrong = Tooltip('strong');

const textBodyTooltipContent = <TextBody>I am body sized tooltip text</TextBody>;
const textSmallTooltipContent = <TextSmall>I am small sized tooltip text</TextSmall>;

storiesOf('Tooltip', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('colors', () => (
    <div>
      {colors.map((color, index) => {
        return (
          <TextBody key={index}>
            <TooltippedStrong
              tooltip={textSmallTooltipContent}
              tooltipColor={color}
            >
              Tooltip {color}
            </TooltippedStrong>
          </TextBody>
        )
      })}
    </div>
  ))
  .add('sizes', () => (
    <div>
      {sizes.map((size, index) => {
        return (
          <TextBody key={index}>
            <TooltippedStrong
              tooltip={textSmallTooltipContent}
              tooltipSize={size}
            >
              Tooltip {size}
            </TooltippedStrong>
          </TextBody>
        )
      })}
    </div>
  ))
  .add('positions', () => (
    <div>
      {positions.map((position, index)=> {
        return (
          <TextBody key={index}>
            <TooltippedStrong
              tooltip={textSmallTooltipContent}
              tooltipPosition={position}
            >
              Tooltip {position}
            </TooltippedStrong>
          </TextBody>
        )
      })}
    </div>
  ))
  .add('with Icon', () => (
    <TextBody>
      <TooltippedStrong
        tooltip={textSmallTooltipContent}
        tooltipIcon={<IconHelpMediumOutline />}
      >
        Hover me
      </TooltippedStrong>
    </TextBody>
  ))
  .add('from TooltipLabel', () => (
    <div>
      <Heading1>
        I'm a Heading 1 with a{' '}
        <TooltippedLabel
          icon={<IconBuildingMediumOutline />}
          tooltip={textSmallTooltipContent}
        >
          hover me
        </TooltippedLabel>{' '}
        tooltip action
      </Heading1>

      <Heading2>
        I'm a Heading 2 with a{' '}
        <TooltippedLabel
          icon={<IconMeetingSmallOutline />}
          tooltip={textSmallTooltipContent}
        >
          hover me
        </TooltippedLabel>{' '}
        tooltip action
      </Heading2>

      <Heading3>
        I'm a Heading 3 with a{' '}
        <TooltippedLabel
          icon={<IconMeetingSmallOutline />}
          tooltip={textSmallTooltipContent}
        >
          hover me
        </TooltippedLabel>{' '}
        tooltip action
      </Heading3>

      <Heading4>
        I'm a Heading 4 with a{' '}
        <TooltippedLabel
          icon={<IconMeetingSmallOutline />}
          inverse
          tooltip={textSmallTooltipContent}
          tooltipColor="inverse"
        >
          hover me
        </TooltippedLabel>{' '}
        tooltip action
      </Heading4>

      <TextBody>
        I'm body text with a{' '}
        <TooltippedLabel
          icon={<IconMeetingSmallOutline />}
          inverse
          tooltip={textSmallTooltipContent}
          tooltipColor="inverse"
        >
          hover me
        </TooltippedLabel>{' '}
        tooltip action
      </TextBody>

      <TextSmall>
        I'm small text with a <TooltippedLabel tooltip={textSmallTooltipContent}>hover me</TooltippedLabel>{' '}
        tooltip action
      </TextSmall>

      <TextTiny>
        I'm small text with a{' '}
        <TooltippedLabel tooltip={textSmallTooltipContent}>
          hover me
        </TooltippedLabel>{' '}
        tooltip action
      </TextTiny>
    </div>
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
