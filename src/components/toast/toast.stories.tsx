import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useReducer } from 'react';
import { Button, Link, Toast, ToastContainer } from '../../index';
import { ToastProps } from './Toast';

export default {
  component: Toast,
  title: 'Mid level blocks / Toast',

  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as ComponentMeta<typeof Toast>;

interface ToastPropsWithKey extends ToastProps {
  key?: number;
}

const toastReducer = (
  { toasts, key }: { toasts: ToastPropsWithKey[]; key: number },
  action: { type: string; payload: ToastPropsWithKey | number },
) => {
  if (action.type === 'REMOVE_TOAST') {
    return {
      key,
      toasts: toasts.filter((t) => t.key !== (action.payload as number)),
    };
  }

  if (action.type === 'ADD_TOAST') {
    return {
      key: key + 1,
      toasts: toasts.concat([action.payload as ToastPropsWithKey]),
    };
  }

  return {
    key,
    toasts,
  };
};

const toastSpawner = (toastProps: ToastPropsWithKey) => {
  const Wrapper = () => {
    const [{ toasts, key }, dispatch] = useReducer(toastReducer, { key: 0, toasts: [] });

    const addToast = (toastProps: ToastPropsWithKey) => {
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

export const DefaultStory: ComponentStory<typeof Toast> = (args) => toastSpawner(args)();

export const withCloseButton: ComponentStory<typeof Toast> = toastSpawner({
  label: 'Toast label',
  timeout: 3000,
});

withCloseButton.storyName = 'With close button';

export const withCustomAction: ComponentStory<typeof Toast> = toastSpawner({
  label: 'Toast label',
  timeout: 3000,
  actionLabel: 'confirm',
  action: () => true,
});

withCustomAction.storyName = 'With custom action';

export const withCustomLink: ComponentStory<typeof Toast> = toastSpawner({
  label: 'Toast label',
  link: <Link href="https://www.teamleader.be">link</Link>,
  timeout: 3000,
});

withCustomLink.storyName = 'With custom link';

export const withMultilineLabel: ComponentStory<typeof Toast> = toastSpawner({
  label: 'Connection timed out. Showing limited amount of messages.',
  timeout: 3000,
  actionLabel: 'Try again',
  action: () => true,
});

withMultilineLabel.storyName = 'With multiline label';

export const withLoadingSpinner: ComponentStory<typeof Toast> = toastSpawner({
  label: 'Working...',
  timeout: 3000,
  processing: true,
});

withLoadingSpinner.storyName = 'With loading spinner';
