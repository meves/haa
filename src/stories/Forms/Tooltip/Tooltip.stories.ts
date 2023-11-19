import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";


const meta = {
    title: 'Forms/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        
    }
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
    args: {
        size: '16'
    }
}

export const Large: Story = {
    args: {
        size: '24'
    }
}