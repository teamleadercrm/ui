import React from 'react';
import { Store, State } from '@sambego/storybook-state';
import { Button, Toast, Link, ToastContainer } from '../../index';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';

const store = new Store({
  children: [],
});

let key = 0;

const handleCustomAction = () => true;

const handleRemoveToast = (keyToRemove) => {
  const currentChildren = store.get('children');
  store.set({
    children: currentChildren.filter((child) => child.key !== String(keyToRemove)),
  });
};

const handleAddToastWithClose = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast
      key={toastKey}
      label="Toast label"
      onClose={() => handleRemoveToast(toastKey)}
      timeout={3000}
      onTimeout={() => handleRemoveToast(toastKey)}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithAction = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast
      key={toastKey}
      label="Toast label"
      onClose={() => handleRemoveToast(toastKey)}
      timeout={3000}
      onTimeout={() => handleRemoveToast(toastKey)}
      actionLabel="confirm"
      action={handleCustomAction}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithLink = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast
      key={toastKey}
      label="Toast label"
      onClose={() => handleRemoveToast(toastKey)}
      timeout={3000}
      onTimeout={() => handleRemoveToast(toastKey)}
      link={<Link href="https://www.teamleader.be">link</Link>}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithMultilineLabel = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast
      key={toastKey}
      label="Connection timed out. Showing limited amount of messages."
      onClose={() => handleRemoveToast(toastKey)}
      timeout={3000}
      onTimeout={() => handleRemoveToast(toastKey)}
      actionLabel="Try again"
      action={handleCustomAction}
    />
  );
  store.set({ children: [...currentChildren, toast] });
};

const handleAddToastWithSpinner = () => {
  const currentChildren = store.get('children');
  const toastKey = key++;
  const toast = (
    <Toast key={toastKey} label="Working..." timeout={3000} onTimeout={() => handleRemoveToast(toastKey)} processing />
  );
  store.set({ children: [...currentChildren, toast] });
};

export default {
  component: Toast,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Toast'),

  parameters: {
    info: {
      propTablesExclude: [Button, State],
    },
  },
};

export const withCloseButton = () => (
  <div>
    <Button label="Make a toast" onClick={handleAddToastWithClose} />
    <State store={store}>
      <ToastContainer children={[]} />
    </State>
  </div>
);

withCloseButton.story = {
  name: 'With close button',
};

export const withCustomAction = () => (
  <div>
    <Button label="Make a toast" onClick={handleAddToastWithAction} />
    <State store={store}>
      <ToastContainer children={[]} />
    </State>
  </div>
);

withCustomAction.story = {
  name: 'With custom action',
};

export const withCustomLink = () => (
  <div>
    <Button label="Make a toast" onClick={handleAddToastWithLink} />
    <State store={store}>
      <ToastContainer children={[]} />
    </State>
  </div>
);

withCustomLink.story = {
  name: 'With custom link',
};

export const withMultilineLabel = () => (
  <div>
    <Button label="Make a toast" onClick={handleAddToastWithMultilineLabel} />
    <State store={store}>
      <ToastContainer children={[]} />
    </State>
  </div>
);

withMultilineLabel.story = {
  name: 'With multiline label',
};

export const withLoadingSpinner = () => (
  <div>
    <Button label="Make a toast" onClick={handleAddToastWithSpinner} />
    <State store={store}>
      <ToastContainer children={[]} />
    </State>
  </div>
);

withLoadingSpinner.story = {
  name: 'With loading spinner',
};
