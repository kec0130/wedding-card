import { useRecoilState, useResetRecoilState, RecoilState, SetterOrUpdater, Resetter } from 'recoil'

export function useRecoil<T>(recoilState: RecoilState<T>): [T, SetterOrUpdater<T>, Resetter] {
  const [value, setter] = useRecoilState(recoilState)
  const resetter = useResetRecoilState(recoilState)
  return [value, setter, resetter]
}
