import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import styles from '@sambego/storybook-styles';
import { Toggle, Island } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const store = new Store({
  checked: false,
});

const handleOnChange = checked => {
  store.set({ checked });
  action(`onChange - checked: ${checked}`)();
};

storiesOf('Toggles', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('size', () => (
    <div>
      <State store={store}>
        <Toggle size="small" onChange={handleOnChange} />
      </State>
      <State store={store}>
        <Toggle size="medium" onChange={handleOnChange} />
      </State>
      <State store={store}>
        <Toggle size="large" onChange={handleOnChange} />
      </State>
    </div>
  ))
  .add('labels', () => (
    <div>
      <State store={store}>
        <Toggle size="small" onChange={handleOnChange} label="I'm a small toggle" />
      </State>
      <State store={store}>
        <Toggle size="medium" onChange={handleOnChange} label="I'm a medium toggle" />
      </State>
      <State store={store}>
        <Toggle size="large" onChange={handleOnChange} label="I'm a large toggle" />
      </State>
    </div>
  ))
  .add('colors', () => (
    <div>
      <Island color="white">
        <State store={store}>
          <Toggle color="neutral" onChange={handleOnChange} label="I'm a white toggle" />
        </State>
      </Island>
      <Island color="neutral" style={{ background: '#354B62'}}> {/*we don't have a teal island, so faking one*/}
        <State store={store}>
          <Toggle color="teal" onChange={handleOnChange} label="I'm a teal toggle" />
        </State>
      </Island>
      <Island color="violet">
        <State store={store}>
          <Toggle color="violet" onChange={handleOnChange} label="I'm a violet toggle" />
        </State>
      </Island>
      <Island color="ruby">
        <State store={store}>
          <Toggle color="ruby" onChange={handleOnChange} label="I'm a ruby toggle" />
        </State>
      </Island>
      <Island color="mint">
        <State store={store}>
          <Toggle color="mint" onChange={handleOnChange} label="I'm a mint toggle" />
        </State>
      </Island>
      <Island color="gold">
        <State store={store}>
          <Toggle color="gold" onChange={handleOnChange} label="I'm a gold toggle" />
        </State>
      </Island>
      <Island color="aqua">
        <State store={store}>
          <Toggle color="aqua" onChange={handleOnChange} label="I'm an aqua toggle" />
        </State>
      </Island>
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Island color="white">
        <Toggle disabled color="neutral" label="I'm a disabled toggle" />
        <Toggle disabled checked color="neutral" label="I'm a disabled toggle" />
      </Island>
      <Island color="neutral" style={{ background: '#354B62'}}> {/*we don't have a teal island, so faking one*/}
        <Toggle disabled color="teal" label="I'm a disabled toggle" />
        <Toggle disabled checked color="teal" label="I'm a disabled toggle" />
      </Island>
      <Island color="violet">
        <Toggle disabled color="violet" label="I'm a disabled toggle" />
        <Toggle disabled checked color="violet" label="I'm a disabled toggle" />
      </Island>
      <Island color="ruby">
        <Toggle disabled color="ruby" label="I'm a disabled toggle" />
        <Toggle disabled checked color="ruby" label="I'm a disabled toggle" />
      </Island>
      <Island color="mint">
        <Toggle disabled color="mint" label="I'm a disabled toggle" />
        <Toggle disabled checked color="mint" label="I'm a disabled toggle" />
      </Island>
      <Island color="gold">
        <Toggle disabled color="gold" label="I'm a disabled toggle" />
        <Toggle disabled checked color="gold" label="I'm a disabled toggle" />
      </Island>
      <Island color="aqua">
        <Toggle disabled color="aqua" label="I'm a disabled toggle" />
        <Toggle disabled checked color="aqua" label="I'm a disabled toggle" />
      </Island>
    </div>
  ));
