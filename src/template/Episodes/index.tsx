import { CardEpisodeProps } from '../../components/CardEpisode'
import Header from '../../components/Header'
import ListEpisodes from '../../components/ListEpisodes'
import Pagination, { PaginationProps } from '../../components/Pagination'
import * as S from './styles'

export type EpisodesProps = {
  episodes: Array<CardEpisodeProps>
  info: PaginationProps
  loading: boolean
  nextPage: (page: number) => void
  setToast: (toast: string) => void
  prevPage: (page: number) => void
  search: (name: string) => void
  toast: string
  getFavoritesEpisodes: (episodes: Array<number>) => void
}

const Episodes = ({
  episodes,
  info,
  loading,
  nextPage,
  setToast,
  toast,
  prevPage,
  search,
  getFavoritesEpisodes
}: EpisodesProps) => (
  <S.Wrapper>
    <S.Logo src="/img/rick-and-morty-logo.png" alt="Logo" />
    <Header
      clear={() => {
        nextPage(1)
        setToast('')
      }}
      search={(name) => search(name)}
      getFavoritesEpisodes={(episodesFavorites: Array<number>) =>
        getFavoritesEpisodes(episodesFavorites)
      }
    />
    {toast && <S.SubTitle>{toast}</S.SubTitle>}
    <ListEpisodes episodes={episodes} loading={loading} />
    {!loading && (
      <Pagination
        next={info.next}
        prev={info.prev}
        sendNextPage={(next: number) => nextPage(next)}
        sendPrevPage={(prev: number) => prevPage(prev)}
      />
    )}
  </S.Wrapper>
)

export default Episodes
