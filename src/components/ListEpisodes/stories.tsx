import { StoryFn, Meta } from '@storybook/react'
import ListEpisodes from '.'
import results from './results.json'

export default {
  title: 'ListEpisodes',
  component: ListEpisodes
} as Meta

export const Basic: StoryFn = (args) => (
  <ListEpisodes episodes={[]} loading={false} {...args} />
)

Basic.args = {
  episodes: results.results,
  loading: false
}
