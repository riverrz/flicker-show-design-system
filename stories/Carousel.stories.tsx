import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Carousel, AspectRatio, styled } from '../src';

const meta: Meta = {
  title: 'Carousel',
  component: Carousel,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Img = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const Default: Story<React.ComponentProps<typeof Carousel>> = (args) => (
  <Carousel>
    {new Array(20).fill(null).map((src, i) => (
      <AspectRatio.Root ratio={16/9} key={i}>
        <Img
          src={`https://picsum.photos/id/${i+11}/200/300`}
          alt="Landscape photo by Tobias Tullius"
        />
      </AspectRatio.Root>
    ))}
  </Carousel>
);
