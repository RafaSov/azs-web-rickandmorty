import { StoryFn, Meta } from '@storybook/react'
import ListCharacter from '.'
import charactersMock from './characters.json'

export default {
  title: 'ListCharacter',
  component: ListCharacter
} as Meta

export const Basic: StoryFn = (args) => <ListCharacter {...args} />

const { characters } = charactersMock

Basic.args = {
  characters: characters
}
