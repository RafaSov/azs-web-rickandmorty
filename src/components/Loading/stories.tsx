import { StoryFn, Meta } from '@storybook/react'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading
} as Meta

export const Basic: StoryFn = (args) => <Loading {...args} />
