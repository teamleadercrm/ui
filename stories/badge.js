import React from 'react';
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { Box, Badge, Heading2, Heading3, Heading4, TextBody, TextDisplay, TextSmall } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';
import { IconBuildingSmallOutline } from '@teamleader/ui-icons';

storiesOf('Badge', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('standalone', () => (
    <div style={centerStyles}>
      <Badge
        disabled={boolean('Disabled', false)}
        inherit={boolean('Inherit', false)}
        inverse={boolean('Inverse', false)}
      >I'm a badge</Badge>
    </div>
  ))
  .add('inline', () => (
    <div style={centerStyles}>
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
      <TextDisplay marginTop={4}>
        I'm display text with a
        <Badge
          disabled={boolean('Disabled', false)}
          inherit={boolean('Inherit', true)}
          inverse={boolean('Inverse', false)}
        >I'm a badge</Badge>
        inside.
      </TextDisplay>
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
    </div>
  ))
  .add('clickable', () => (
    <div style={centerStyles}>
      <Badge
        disabled={boolean('Disabled', false)}
        inherit={boolean('Inherit', false)}
        inverse={boolean('Inverse', false)}
      >I'm a badge</Badge>
    </div>
  ))
  .add('with icon', () => (
    <div style={centerStyles}>
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
    </div>
  ))
  .add('with custom element', () => (
    <div  style={centerStyles}>
      <Badge
        disabled={boolean('Disabled', false)}
        element="a"
        href="https://teamleader.eu"
        inherit={boolean('Inherit', false)}
        inverse={boolean('Inverse', false)}
      >I'm a badge</Badge>
    </div>
  ));
