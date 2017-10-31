import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import styles from '@sambego/storybook-styles';
import { Checkbox, Island } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const store = new Store({
  checked: false,
});

const handleOnChange = checked => {
  store.set({ checked });
  action(`onChange - checked: ${checked}`)();
};

storiesOf('Checkboxes', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('size', () => (
    <div>
      <State store={store}>
        <Checkbox size="small" margin={2} onChange={handleOnChange} />
      </State>
      <State store={store}>
        <Checkbox size="medium" margin={2} onChange={handleOnChange} />
      </State>
      <State store={store}>
        <Checkbox size="large" margin={2} onChange={handleOnChange} />
      </State>
    </div>
  ))
  .add('labels', () => (
    <div>
      <State store={store}>
        <Checkbox size="small" margin={2} onChange={handleOnChange} label="I'm a small Checkbox" />
      </State>
      <State store={store}>
        <Checkbox size="medium" margin={2} onChange={handleOnChange} label="I'm a medium Checkbox" />
      </State>
      <State store={store}>
        <Checkbox size="large" margin={2} onChange={handleOnChange} label="I'm a large Checkbox" />
      </State>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Island color="white">
        <Checkbox disabled margin={2} color="neutral" label="I'm a disabled Checkbox" />
        <Checkbox disabled margin={2} checked color="neutral" label="I'm a disabled Checkbox" />
      </Island>
    </div>
  ));
