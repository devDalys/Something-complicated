import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {Button, ThemeButton} from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Clear = Template.bind({})

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
}

Primary.args = {
  children: 'Text'
}

Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR
}
