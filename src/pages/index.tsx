import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { EpisodesApiProps } from '../types/api'
import { CardEpisodeProps } from '../components/CardEpisode'
import { PaginationProps } from '../components/Pagination'
import client from '../graphql/client'
import GET_EPISODES_BY_ID from '../graphql/queries/getEpisodeById'
import Episodes from '../template/Episodes'
import GET_EPISODES from '../graphql/queries/getRickAndMorry'
import GET_EPISODES_BY_NAME from '../graphql/queries/getEpisodeByName'
import GET_EPISODES_PAGE from '../graphql/queries/getEpisodesPage'

const emptyPaginate = () => ({
  next: 0,
  prev: 0,
  sendNextPage: () => null,
  sendPrevPage: () => null
})

export default function Home({ episodes, info }: EpisodesApiProps) {
  const [loading, setLoading] = useState(false)
  const [toastMessage, settoastMessage] = useState('')
  const [episodesList, setEpisodesList] = useState<Array<CardEpisodeProps>>([])
  const [infoPagination, setInfoPagination] =
    useState<PaginationProps>(emptyPaginate())

  useEffect(() => {
    if (episodes?.length === 0) {
      setLoading(true)
    } else {
      setEpisodesList(episodes)
      setInfoPagination(info)
    }
  }, [episodes, info])

  const changePage = async (page: number) => {
    setLoading(true)
    const { episodes }: { episodes: any } = await client.request(
      GET_EPISODES_PAGE,
      { page }
    )
    setEpisodesList(episodes.results)
    setInfoPagination(episodes.info)
    setLoading(false)
  }

  const searchEpisode = async (name: string) => {
    if (name.length === 0) {
      changePage(1)
    }
    setLoading(true)
    const { episodes }: { episodes: any } = await client.request(
      GET_EPISODES_BY_NAME,
      { name }
    )
    setEpisodesList(episodes.results)
    setInfoPagination(episodes.info)
    setLoading(false)
  }

  const getFavoritesEpisodes = async (episodesFavorites: Array<number>) => {
    setLoading(true)
    console.log('fav', episodesFavorites)
    if (episodesFavorites.length !== 0) {
      const { episodesByIds }: { episodesByIds: any } = await client.request(
        GET_EPISODES_BY_ID,
        {
          ids: episodesFavorites
        }
      )
      setEpisodesList(episodesByIds)
      setInfoPagination(emptyPaginate())
      setLoading(false)
    } else {
      settoastMessage('Você não possui favoritos!')
      setLoading(false)
    }
  }

  return (
    <Episodes
      loading={loading}
      episodes={episodesList}
      info={infoPagination}
      nextPage={changePage}
      prevPage={changePage}
      search={searchEpisode}
      getFavoritesEpisodes={getFavoritesEpisodes}
      toast={toastMessage}
      setToast={settoastMessage}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { episodes }: { episodes: any } = await client.request(GET_EPISODES)
  return {
    props: {
      episodes: episodes.results,
      info: episodes.info
    }
  }
}
