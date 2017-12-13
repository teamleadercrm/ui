import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Button, Toast } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

const store = new Store({
  active: false,
});

const handleButtonClick = () => {
  store.set({ active: true });
  action('onClick - active: true')();
};

const handleToastCloseButtonClick = () => {
  store.set({ active: false });
  action('onClick - active: false')();
};

const handleToastTimeout = () => {
  store.set({ active: false });
  action('onTimeout - active: false')();
};

storiesOf('Toast', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('with close button', () => (
    <div>
      <Button label="Make a toast" onClick={handleButtonClick} />
      <State store={store}>
        <Toast
          active={false}
          label="Toast label"
          timeout={3000}
          onClick={handleToastCloseButtonClick}
          onTimeout={handleToastTimeout}
        />
      </State>
    </div>
  ))
  .add('with action link', () => (
    <div>
      <Button label="Make a toast" onClick={handleButtonClick} />
      <State store={store}>
        <Toast
          action="Confirm"
          active={false}
          label="Toast label"
          timeout={3000}
          onClick={handleToastCloseButtonClick}
          onTimeout={handleToastTimeout}
        />
      </State>
    </div>
  ))
  .add('with multiline label', () => (
    <div>
      <Button label="Make a toast" onClick={handleButtonClick} />
      <State store={store}>
        <Toast
          action="Try again"
          active={false}
          label="Connection timed out. Showing limited amount of messages."
          timeout={3000}
          onClick={handleToastCloseButtonClick}
          onTimeout={handleToastTimeout}
        />
      </State>
    </div>
  ))
  .add('with loading spinner', () => (
    <div>
      <Button label="Make a toast" onClick={handleButtonClick} />
      <State store={store}>
        <Toast
          active={false}
          label="Working..."
          timeout={3000}
          onClick={handleToastCloseButtonClick}
          onTimeout={handleToastTimeout}
          processing
        />
      </State>
    </div>
  ));
