import { atom } from 'recoil'
import { IPosition } from 'types/map'

export const currentPositionState = atom<IPosition>({
  key: 'currentPositionState',
  default: {
    lat: 0,
    lng: 0,
  },
})

export const selectedIndexState = atom({
  key: 'selectedIndexState',
  default: 0,
})
