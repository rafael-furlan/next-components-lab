import type { Meta, StoryObj } from '@storybook/nextjs';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          Card content goes here.
        </CardContent>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 