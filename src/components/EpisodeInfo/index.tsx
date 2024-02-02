import * as S from './styles'

export type EpisodeInfoProps = {
  episode: number
  name: string
  air_date: string
}

const EpisodeInfo = ({ episode, name, air_date }: EpisodeInfoProps) => {
  const formatAirDate = () => {
    if (air_date) {
      const date = new Date(air_date)
      return new Intl.DateTimeFormat('pt-br').format(date)
    }
  }

  return (
    <S.Wrapper>
      <S.TextLabel>Episódio: </S.TextLabel>
      {episode}
      <br />
      <S.TitleLabel>{name}</S.TitleLabel>
      <br />
      <S.TextLabel>Data de lançamento: </S.TextLabel>
      {formatAirDate()}
      <br />
    </S.Wrapper>
  )
}

export default EpisodeInfo
