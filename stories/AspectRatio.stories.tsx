import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AspectRatio, styled } from '../src';

const meta: Meta = {
  title: 'AspectRatio',
  component: AspectRatio.Root,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Box = styled('div', {});
const Img = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

const Template: Story<React.ComponentProps<typeof AspectRatio.Root>> = (
  args
) => (
  <Box
    css={{
      width: 300,
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: `0 2px 10px black`,
    }}
  >
    <AspectRatio.Root {...args} />
  </Box>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  ratio: 16 / 9,
  children: (
    <Img
      src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
      alt="Landscape photo by Tobias Tullius"
    />
  ),
};
