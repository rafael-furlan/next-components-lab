import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from '../components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    children: 'Badge',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Destructive Badge' },
};
export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline Badge' },
};