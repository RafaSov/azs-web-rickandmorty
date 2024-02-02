import { StoryFn, Meta } from '@storybook/react'
import CharacterCard from '.'

export default {
  title: 'CharacterCard',
  component: CharacterCard
} as Meta

export const Basic: StoryFn = (args) => (
  <CharacterCard name={''} image={''} status={''} species={''} {...args} />
)

Basic.args = {
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
  species: 'Human'
}
