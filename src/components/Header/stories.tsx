import { Story, Meta, StoryFn } from '@storybook/react'
import Header from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Basic: StoryFn = (args) => (
  <Header
    search={function (): void {
      throw new Error('Function not implemented.')
    }}
    clear={function (): void {
      throw new Error('Function not implemented.')
    }}
    getFavoritesEpisodes={function (): void {
      throw new Error('Function not implemented.')
    }}
    {...args}
  />
)
