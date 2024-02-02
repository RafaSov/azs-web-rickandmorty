import { StoryFn, Meta } from '@storybook/react'
import Search from '.'

export default {
  title: 'Search',
  component: Search
} as Meta

export const Basic: StoryFn = (args) => (
  <Search
    sendSearch={function (): void {
      throw new Error('Function not implemented.')
    }}
    {...args}
  />
)

Basic.args = {
  sendSearch: (search: string) => console.log(search)
}
