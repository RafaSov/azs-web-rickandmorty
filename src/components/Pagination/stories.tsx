import { StoryFn, Meta } from '@storybook/react'
import Pagination from '.'

export default {
  title: 'Pagination',
  component: Pagination
} as Meta

export const Basic: StoryFn = (args) => (
  <Pagination
    sendNextPage={(next: number) => console.log('heyyy', next)}
    sendPrevPage={(prev: number) => console.log('heyyy', prev)}
    {...args}
  />
)

Basic.args = {
  next: 3,
  prev: 1
}
