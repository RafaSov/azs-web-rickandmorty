import { StoryFn, Meta } from '@storybook/react'
import EpisodeInfo from '.'

export default {
  title: 'EpisodeInfo',
  component: EpisodeInfo
} as Meta

export const Basic: StoryFn = (args) => (
  <EpisodeInfo episode={0} name={''} air_date={''} {...args} />
)
