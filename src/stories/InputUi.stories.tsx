import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from '../components/ui/input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
  args: {
    placeholder: 'Type something...',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Password: Story = {
  args: { type: 'password', placeholder: 'Password' },
}; 