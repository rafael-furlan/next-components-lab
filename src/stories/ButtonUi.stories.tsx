import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'text' },
    size: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Large: Story = {
  args: { size: 'lg', children: 'Large Button' },
};
export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary Button' },
}; 