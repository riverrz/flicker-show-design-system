import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FormControl, Input } from '../src/components';

const meta: Meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    error: {
      control: {
        type: 'boolean',
      },
    },
    errorMsg: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const onInputChange = action('onChange');

export default meta;

const Template: Story<React.ComponentProps<typeof Input>> = (args) => (
  <FormControl>
    <Input {...args} />
  </FormControl>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  onChange: onInputChange,
  label: 'Email or phone number',
  id: 'emailOrPhone',
};
