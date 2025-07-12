import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from '../components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
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