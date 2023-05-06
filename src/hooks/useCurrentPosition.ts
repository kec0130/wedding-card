import { useRecoil } from './useRecoil'
import { currentPositionState } from 'states/map'

export const useCurrentPosition = () => {
  const [, setCurrentPosition] = useRecoil(currentPositionState)

  navigator.geolocation.getCurrentPosition((position) => {
    setCurrentPosition({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  })
}
