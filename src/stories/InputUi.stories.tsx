import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from '../components/ui/input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
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