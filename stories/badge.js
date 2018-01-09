import React from 'react';
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { Box, Badge, Heading1, Heading2, Heading3, Heading4, TextTiny, TextSmall, TextBody } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';

storiesOf('Badge', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('standalone', () => (
    <Badge
      disabled={boolean('Disabled', false)}
      inherit={boolean('Inherit', false)}
      inverse={boolean('Inverse', false)}
    >I'm a badge</Badge>
  ))
  .add('inline', () => (
    <Box>
      <Heading1>
        I'm a Heading 1 with a
        <Badge
          disabled={boolean('Disabled', false)}
          inherit={boolean('Inherit', true)}
          inverse={boolean('Inverse', false)}
        >I'm a badge</Badge>
        inside.
      </Heading1>
      <Heading2 marginTop={4}>
        I'm a Heading 2 with a
        <Badge
          disabled={boolean('Disabled', false)}
          inherit={boolean('Inherit', true)}
          inverse={boolean('Inverse', false)}
        >I'm a badge</Badge>
        inside.
      </Heading2>
      <Heading3 marginTop={4}>
        I'm a Heading 3 with a
        <Badge
          disabled={boolean('Disabled', false)}
          inherit={boolean('Inherit', true)}
          inverse={boolean('Inverse', false)}
        >I'm a badge</Badge>
        inside.
      </Heading3>
      <Heading4 marginTop={4}>
        I'm a Heading 4 with a
        <Badge
          disabled={boolean('Disabled', false)}
          inherit={boolean('Inherit', true)}
          inverse={boolean('Inverse', false)}
        >I'm a badge</Badge>
        inside.
      </Heading4>
      <TextBody marginTop={4}>
        I'm body text with a
        <Badge
          disabled={boolean('Disabled', false)}
          inherit={boolean('Inherit', true)}
          inverse={boolean('Inverse', false)}
        >I'm a badge</Badge>
        inside.
      </TextBody>
      <TextSmall marginTop={4}>
        I'm small text with a
        <Badge
          disabled={boolean('Disabled', false)}
          inherit={boolean('Inherit', true)}
          inverse={boolean('Inverse', false)}
        >I'm a badge</Badge>
        inside.
      </TextSmall>
      <TextTiny marginTop={4}>
        I'm tiny text with a
        <Badge
          disabled={boolean('Disabled', false)}
          inherit={boolean('Inherit', true)}
          inverse={boolean('Inverse', false)}
        >I'm a badge</Badge>
        inside.
      </TextTiny>
    </Box>
  ))
  .add('clickable', () => (
    <Badge
      disabled={boolean('Disabled', false)}
      inherit={boolean('Inherit', false)}
      inverse={boolean('Inverse', false)}
      onClick={action('Badge clicked')}
    >I'm a badge</Badge>
  ))
  .add('with icon', () => (
    <Box>
      <Badge
        disabled={boolean('Disabled', false)}
        icon={<IconBuildingSmallOutline/>}
        inherit={boolean('Inherit', false)}
        inverse={boolean('Inverse', false)}
        marginHorizontal={3}
      >I'm a badge</Badge>
      <Badge
        disabled={boolean('Disabled', false)}
        icon={<IconBuildingSmallOutline/>}
        iconPlacement="right"
        inherit={boolean('Inherit', false)}
        inverse={boolean('Inverse', false)}
        marginHorizontal={3}
      >I'm a badge</Badge>
    </Box>
  ))
  .add('with custom element', () => (
    <Badge
      disabled={boolean('Disabled', false)}
      element="a"
      href="https://teamleader.eu"
      inherit={boolean('Inherit', false)}
      inverse={boolean('Inverse', false)}
      onClick={action('Badge clicked')}
    >I'm a badge</Badge>
  ));
