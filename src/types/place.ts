export interface IPlaceApiRes {
  label_category: string
  sentence: string
}

export type TSearchStatus = 'init' | 'loading' | 'done' | 'error'
