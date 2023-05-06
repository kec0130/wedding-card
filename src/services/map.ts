import axios from 'axios'
import { IMapSearchApiRes } from 'types/map'

interface Params {
  query: string
  lat: number
  lng: number
  radius?: number
  page?: number
  size?: number
  sort?: 'accuracy' | 'distance'
  categoryGroupCode?: string
}

const MAP_BASE_URL = 'https://dapi.kakao.com/v2/local'

export const getMapSearchApi = (params: Params) =>
  axios.get<IMapSearchApiRes>(`${MAP_BASE_URL}/search/keyword`, {
    params: {
      ...params,
      x: params.lng,
      y: params.lat,
      category_group_code: params.categoryGroupCode,
    },
    headers: {
      Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
    },
  })
