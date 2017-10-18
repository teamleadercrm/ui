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
  .add('Close', () => (
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
  .add('Accept', () => (
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
          type="accept"
        />
      </State>
    </div>
  ))
  .add('Cancel', () => (
    <div>
      <Button label="Make a toast" onClick={handleButtonClick} />
      <State store={store}>
        <Toast
          action="Abort"
          active={false}
          label="Toast label"
          timeout={3000}
          onClick={handleToastCloseButtonClick}
          onTimeout={handleToastTimeout}
          type="cancel"
        />
      </State>
    </div>
  ))
  .add('Warning', () => (
    <div>
      <Button label="Make a toast" onClick={handleButtonClick} />
      <State store={store}>
        <Toast
          action="I'm warned!"
          active={false}
          label="Toast label"
          timeout={3000}
          onClick={handleToastCloseButtonClick}
          onTimeout={handleToastTimeout}
          type="warning"
        />
      </State>
    </div>
  ));
