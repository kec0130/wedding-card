interface IMetaData {
  same_name: ISameName
  pageable_count: number
  total_count: number
  is_end: boolean
}

interface ISameName {
  region: string[]
  keyword: string
  selected_region: string
}

export interface IPlace {
  place_name: string
  distance: string
  place_url: string
  category_name: string
  address_name: string
  road_address_name: string
  id: string
  phone: string
  category_group_code: string
  category_group_name: string
  x: string
  y: string
}

export interface IMapSearchApiRes {
  meta: IMetaData
  documents: IPlace[]
}

export interface IMapProps {
  data: IPlace[] | undefined
}

export interface IPosition {
  lat: number
  lng: number
}
