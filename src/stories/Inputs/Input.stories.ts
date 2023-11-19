import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
    title: 'Forms/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        
    }
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Smartphone: Story = {
    args: {
        size: 'smartphone'
    }
}

export const Tablet: Story = {
    args: {
        size: 'tablet'
    }
}

export const Desktop: Story = {
    args: {
        size: 'desktop'
    }
}