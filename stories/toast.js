import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Button, Toast } from '../components';

const store = new Store({
  active: false,
});

const handleButtonClick = () => {
  store.set({ active: true });
};

const handleToastCloseButtonClick = () => {
  store.set({ active: false });
};

const handleToastTimeout = () => {
  store.set({ active: false });
};

const handleCustomAction = () => true;

storiesOf('Toast', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Button, State],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .add('with close button', () => (
    <div>
      <Button label="Make a toast" onClick={handleButtonClick} />
      <State store={store}>
        <Toast
          active={false}
          label="Toast label"
          timeout={3000}
          onClose={handleToastCloseButtonClick}
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
          actionLabel="Confirm"
          action={handleCustomAction}
          active={false}
          label="Toast label"
          timeout={3000}
          onClose={handleToastCloseButtonClick}
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
          action={handleCustomAction}
          actionLabel="Try again"
          active={false}
          label="Connection timed out. Showing limited amount of messages."
          timeout={3000}
          onClose={handleToastCloseButtonClick}
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
          onClose={handleToastCloseButtonClick}
          onTimeout={handleToastTimeout}
          processing
        />
      </State>
    </div>
  ));
