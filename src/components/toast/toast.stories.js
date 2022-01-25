import React, { useReducer } from 'react';
import { Button, Toast, Link, ToastContainer } from '../../index';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';

export default {
  component: Toast,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Toast'),

  parameters: {
    info: {
      propTablesExclude: [Button],
    },
  },
};

const toastReducer = ({ toasts, key }, action) => {
  if (action.type === 'REMOVE_TOAST') {
    return {
      key,
      toasts: toasts.filter((t) => t.key !== action.payload),
    };
  }

  if (action.type === 'ADD_TOAST') {
    return {
      key: key + 1,
      toasts: toasts.concat([action.payload]),
    };
  }

  return {
    key,
    toasts,
  };
};

const toastSpawner = (toastProps) => {
  const Wrapper = () => {
    const [{ toasts, key }, dispatch] = useReducer(toastReducer, { key: 0, toasts: [] });

    const addToast = (toastProps) => {
      const props = {
        ...toastProps,
        key,
        onClose: () => dispatch({ type: 'REMOVE_TOAST', payload: key }),
        onTimeout: () => dispatch({ type: 'REMOVE_TOAST', payload: key }),
      };

      dispatch({
        type: 'ADD_TOAST',
        payload: props,
      });
    };

    return (
      <div>
        <Button label="Make a toast" onClick={() => addToast(toastProps)} />
        <ToastContainer>
          {toasts.map((toastProps) => (
            <Toast {...toastProps} key={toastProps.key} />
          ))}
        </ToastContainer>
      </div>
    );
  };

  return Wrapper;
};

export const withCloseButton = toastSpawner({
  label: 'Toast label',
  timeout: 3000,
});

withCloseButton.storyName = 'With close button';

export const withCustomAction = toastSpawner({
  label: 'Toast label',
  timeout: 3000,
  actionLabel: 'confirm',
  action: () => true,
});

withCustomAction.storyName = 'With custom action';

export const withCustomLink = toastSpawner({
  label: 'Toast label',
  link: <Link href="https://www.teamleader.be">link</Link>,
  timeout: 3000,
});

withCustomLink.storyName = 'With custom link';

export const withMultilineLabel = toastSpawner({
  label: 'Connection timed out. Showing limited amount of messages.',
  timeout: 3000,
  actionLabel: 'Try again',
  action: () => true,
});

withMultilineLabel.storyName = 'With multiline label';

export const withLoadingSpinner = toastSpawner({
  label: 'Working...',
  timeout: 3000,
  processing: true,
});

withLoadingSpinner.storyName = 'With loading spinner';
