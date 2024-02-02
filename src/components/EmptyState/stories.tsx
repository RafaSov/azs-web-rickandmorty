import { StoryFn, Meta } from '@storybook/react'
import EmptyState from '.'

export default {
  title: 'EmptyState',
  component: EmptyState
} as Meta

export const Basic: StoryFn = (args) => <EmptyState {...args} />
