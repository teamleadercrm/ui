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
} from '../../components';
import Tooltip from '../../components/tooltip';
import { IconHelpMediumOutline, IconMeetingSmallOutline } from '@teamleader/ui-icons';

const TooltipButton = Tooltip(Button);
const TooltipStrongDirect = Tooltip('span');

const textSmallOnlyTooltip = <TextSmall color="gold">I am small text</TextSmall>;

const textBodyOnlyTooltip = <TextBody color="aqua">I am body text</TextBody>;

const textTinyWithHeadingTooltip = (
  <div>
    <TextTiny>I am tiny text</TextTiny>
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
              <TooltipButton tooltip="Hi there!" level="outline" tooltipPosition="left">
                Hover me
              </TooltipButton>
              <TooltipButton tooltip="Hi there!" level="secondary" tooltipPosition="top" tooltipColor="neutral">
                Hover me
              </TooltipButton>
              <TooltipButton
                tooltip={<TextBody color="mint">Hello there!</TextBody>}
                level="primary"
                tooltipPosition="bottom"
                tooltipColor="mint"
              >
                Hover me
              </TooltipButton>
              <TooltipButton
                tooltip={<TextBody color="ruby">Hello there!</TextBody>}
                level="destructive"
                tooltipPosition="right"
                tooltipColor="ruby"
              >
                Hover me
              </TooltipButton>
            </ButtonGroup>

            <Heading1>
              I'm a Heading 1 with a
              <TooltipStrongDirect tooltipPosition="top" tooltip={textSmallOnlyTooltip} tooltipColor="gold">
                <span style={{ borderRadius: '4px', backgroundColor: '#CCC', padding: '0 6px' }}>
                  <IconMeetingSmallOutline />
                  tooltip
                </span>
              </TooltipStrongDirect>{' '}
              action
            </Heading1>

            <Heading2>
              I'm a Heading 2 with a
              <TooltipStrongDirect
                tooltipIcon={<IconMeetingSmallOutline />}
                tooltip={<TextSmall color="violet">I am small text</TextSmall>}
                tooltipColor="violet"
              >
                tooltip
              </TooltipStrongDirect>{' '}
              action
            </Heading2>

            <Heading3>
              I'm a Heading 3 with a
              <TooltipStrongDirect tooltip={textBodyOnlyTooltip} tooltipColor="aqua">
                tooltip
              </TooltipStrongDirect>{' '}
              action
            </Heading3>

            <Heading4>
              I'm a Heading 4 with a
              <TooltipStrongDirect
                tooltipIcon={<IconHelpMediumOutline />}
                tooltip={<TextBody>I am body text</TextBody>}
              >
                tooltip
              </TooltipStrongDirect>{' '}
              action
            </Heading4>

            <TextBody>
              I'm body text with a
              <TooltipStrongDirect
                tooltipIcon={<IconHelpMediumOutline />}
                tooltip={textTinyWithHeadingTooltip}
                tooltipColor="inverse"
              >
                tooltip
              </TooltipStrongDirect>{' '}
              action
            </TextBody>

            <TextSmall>
              I'm small text with a
              <TooltipStrongDirect tooltip="I am the tooltip content">tooltip</TooltipStrongDirect> action
            </TextSmall>

            <TextTiny>
              I'm small text with a
              <TooltipStrongDirect tooltip="I am the tooltip content" tooltipColor="inverse">
                tooltip
              </TooltipStrongDirect>{' '}
              action
            </TextTiny>
          </div>
        </div>
      </article>
    );
  }
}

export default TooltipTest;
