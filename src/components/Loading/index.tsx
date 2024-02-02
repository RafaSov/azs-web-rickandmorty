import Image from 'next/image'
import * as S from './styles'

const Loading = () => (
  <S.Wrapper>
    <Image src="/img/rick-and-morty-rick.gif" width={600} height={400} alt="Loading" />
  </S.Wrapper>
)

export default Loading
