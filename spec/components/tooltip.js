import React, { PureComponent } from 'react';
import {
  Button,
  ButtonGroup,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  TextBody,
  TextSmall,
  TextTiny,
  Section,
  StatusLabel,
} from '../../components';
import Tooltip, { TooltipLabel } from '../../components/tooltip';
import { IconHelpMediumOutline, IconBuildingMediumOutline, IconMeetingSmallOutline } from '@teamleader/ui-icons';

const TooltippedLabel = Tooltip(TooltipLabel);
const TooltippedStatusLabel = Tooltip(StatusLabel);
const TooltippedButton = Tooltip(Button);
const TooltippedStrong = Tooltip('strong');

const textSmallOnlyTooltip = <TextSmall>I am small text</TextSmall>;

const textBodyOnlyTooltip = <TextBody>I am body text</TextBody>;

const textTinyWithHeadingTooltip = (
  <div>
    <TextTiny>I am tiny text in a multi line tooltip</TextTiny>
    <Heading2>123456</Heading2>
  </div>
);

class TooltipTest extends PureComponent {
  render() {
    return (
      <article>
        <Section color="neutral" dark>
          <Heading1>Tooltips</Heading1>
        </Section>

        <div className="component-spec">
          <div className="properties">
            <ButtonGroup>
              <TooltippedButton tooltip="Hi there!" level="outline" tooltipPosition="left">
                Hover me
              </TooltippedButton>
              <TooltippedButton tooltip="Hi there!" level="secondary" tooltipPosition="top" tooltipColor="neutral">
                Hover me
              </TooltippedButton>
              <TooltippedButton
                tooltip={<TextBody>Hello there!</TextBody>}
                level="primary"
                tooltipPosition="bottom"
                tooltipColor="mint"
              >
                Hover me
              </TooltippedButton>
              <TooltippedButton
                tooltip={<TextBody>Hello there!</TextBody>}
                level="destructive"
                tooltipPosition="right"
                tooltipColor="ruby"
              >
                Hover me
              </TooltippedButton>
            </ButtonGroup>

            <Heading1>
              I'm a Heading 1 with a{' '}
              <TooltippedLabel
                icon={<IconBuildingMediumOutline />}
                tooltipPosition="top"
                tooltip={textSmallOnlyTooltip}
                tooltipColor="gold"
              >
                tooltip
              </TooltippedLabel>{' '}
              action{' '}
              <TooltippedStatusLabel tooltip="This thing has the completed status" color="mint">
                Completed
              </TooltippedStatusLabel>
            </Heading1>

            <Heading2>
              I'm a Heading 2 with a{' '}
              <TooltippedLabel
                icon={<IconMeetingSmallOutline />}
                tooltipIcon={<IconMeetingSmallOutline />}
                tooltip={<TextSmall>I am small text</TextSmall>}
                tooltipColor="violet"
              >
                tooltip
              </TooltippedLabel>{' '}
              action
            </Heading2>

            <Heading3>
              I'm a Heading 3 with a{' '}
              <TooltippedLabel tooltip={textBodyOnlyTooltip} tooltipColor="aqua">
                tooltip
              </TooltippedLabel>{' '}
              action
            </Heading3>

            <Heading4>
              I'm a Heading 4 with a{' '}
              <TooltippedLabel
                inverse
                tooltipIcon={<IconHelpMediumOutline />}
                tooltip={<TextBody>I am body text</TextBody>}
              >
                tooltip
              </TooltippedLabel>{' '}
              action
            </Heading4>

            <TextBody>
              I'm body text with a{' '}
              <TooltippedLabel
                icon={<IconMeetingSmallOutline />}
                inverse
                tooltipIcon={<IconHelpMediumOutline />}
                tooltip={textTinyWithHeadingTooltip}
                tooltipColor="inverse"
                tooltipSize="small"
              >
                tooltip
              </TooltippedLabel>{' '}
              action
            </TextBody>

            <TextSmall>
              I'm small text with a <TooltippedStrong tooltip="I am the tooltip content">tooltip</TooltippedStrong>{' '}
              action
            </TextSmall>

            <TextTiny>
              I'm small text with a{' '}
              <TooltippedStrong tooltip="I am the tooltip content" tooltipColor="inverse">
                tooltip
              </TooltippedStrong>{' '}
              action
            </TextTiny>
          </div>
        </div>
      </article>
    );
  }
}

export default TooltipTest;
