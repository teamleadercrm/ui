import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ValidationText from './ValidationText';

export default {
  component: ValidationText,
  title: 'Low level blocks / Form elements/ValidationText',
  argTypes: {
    success: {
      control: {
        type: 'text',
      },
      defaultValue: 'Success validation text',
    },
    error: {
      control: {
        type: 'text',
      },
    },
    warning: {
      control: {
        type: 'text',
      },
    },
    help: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof ValidationText>;

export const DefaultStory: ComponentStory<typeof ValidationText> = (args) => <ValidationText {...args} />;

export const PossibleValidationTexts: ComponentStory<typeof ValidationText> = () => (
  <>
    <ValidationText success="Success validation text" />
    <ValidationText error="Error validation text" />
    <ValidationText warning="Warning validation text" />
    <ValidationText help="Help validation text" />
  </>
);
