import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import styles from '@sambego/storybook-styles';
import { IconAddMediumOutline, IconAddSmallOutline,IconMagicMediumOutline } from '@teamleader/ui-icons';
import { Button, ButtonGroup } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('Buttons', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('with text', () => (
    <ButtonGroup>
      <Button
        label="Button"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
    </ButtonGroup>
  ))
  .add('with icon', () => (
    <ButtonGroup>
      <Button
        icon={<IconAddSmallOutline />}
        size="small"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
      <Button
        icon={<IconAddMediumOutline />}
        size="medium"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
      <Button
        icon={<IconMagicMediumOutline />}
        size="large"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
    </ButtonGroup>
  ))
  .add('with text and icon', () => (
    <ButtonGroup>
      <Button
        icon={<IconAddMediumOutline />}
        label="Button"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
      <Button
        icon={<IconAddMediumOutline />}
        iconPlacement="right"
        label="Button"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
    </ButtonGroup>
  ))
  .add('size', () => (
    <ButtonGroup>
      <Button
        size="small"
        label="Button small"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
      <Button
        size="medium"
        label="Button medium"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
      <Button
        size="large"
        label="Button large"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
    </ButtonGroup>
  ))
  .add('level', () => (
    <ButtonGroup>
      <Button
        level="primary"
        label="Primary button"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
      <Button
        level="secondary"
        label="Secondary button"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
      <Button
        level="outline"
        label="Outline button"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
        inverse={boolean('Inverse', false)}
      />
      <Button
        level="destructive"
        label="Destructive button"
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full width', false)}
        processing={boolean('Processing', false)}
      />
    </ButtonGroup>
  ));
