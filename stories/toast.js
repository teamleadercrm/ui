import React from 'react';
import PropTable from './components/propTable';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { Button, Toast, Link, ToastContainer } from '../components';

const store = new Store({
  children: [],
});

const handleCustomAction = () => true;

const handleRemoveToast = () => {
  const currentChildren = store.get('children');
  store.set({ children: currentChildren.filter((val, idx) => idx !== 0) });
};

const handleAddToastWithAction = () => {
  const currentChildren = store.get('children');
  const toast = (
    <Toast
      label="Toast label"
      onClose={handleRemoveToast}
      timeout={3000}
      onTimeout={handleRemoveToast}
      actionLabel="confirm"
      action={handleCustomAction}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithLink = () => {
  const currentChildren = store.get('children');
  const toast = (
    <Toast
      label="Toast label"
      onClose={handleRemoveToast}
      timeout={3000}
      onTimeout={handleRemoveToast}
      link={<Link href="https://www.teamleader.be">link</Link>}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithMultilineLabel = () => {
  const currentChildren = store.get('children');
  const toast = (
    <Toast
      label="Connection timed out. Showing limited amount of messages."
      onClose={handleRemoveToast}
      timeout={3000}
      onTimeout={handleRemoveToast}
      actionLabel="Try again"
      action={handleCustomAction}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithSpinner = () => {
  const currentChildren = store.get('children');
  const toast = <Toast label="Working..." timeout={3000} onTimeout={handleRemoveToast} processing />;
  store.set({ children: [...currentChildren, toast] });
};

const getArrayOfNumbers = length => {
  return Array.apply(null, { length: length }).map(Number.call, Number);
};

storiesOf('Toast', module)
  .addDecorator((story, context) =>
    withInfo({
      TableComponent: PropTable,
      propTablesExclude: [Button, State],
    })(story)(context),
  )
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('with close button', () => {
    const numberOfToasts = number('Toasts', 0);

    return (
      <div>
        <ToastContainer>
          {getArrayOfNumbers(numberOfToasts).map((val, idx) => {
            return <Toast key={idx} label="Toast label" onClose={handleRemoveToast} />;
          })}
        </ToastContainer>
      </div>
    );
  })
  .add('with custom action', () => (
    <div>
      <Button label="Make a toast" onClick={handleAddToastWithAction} />
      <State store={store}>
        <ToastContainer children={[]} />
      </State>
    </div>
  ))
  .add('with custom link', () => (
    <div>
      <Button label="Make a toast" onClick={handleAddToastWithLink} />
      <State store={store}>
        <ToastContainer children={[]} />
      </State>
    </div>
  ))
  .add('with multiline label', () => (
    <div>
      <Button label="Make a toast" onClick={handleAddToastWithMultilineLabel} />
      <State store={store}>
        <ToastContainer children={[]} />
      </State>
    </div>
  ))
  .add('with loading spinner', () => (
    <div>
      <Button label="Make a toast" onClick={handleAddToastWithSpinner} />
      <State store={store}>
        <ToastContainer children={[]} />
      </State>
    </div>
  ));
