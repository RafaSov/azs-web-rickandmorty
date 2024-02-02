import GlobalStyles from '../../../Downloads/azs-web-rickandmorty-main/azs-web-rickandmorty-main/src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles/>
      <Story/>
    </>
  )
]
