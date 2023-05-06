import { IPlaceApiRes } from 'types/place'

const PLACE_BASE_URL = 'https://www.chaechae.site'

export const getPlaceInferenceApi = (formData: FormData): Promise<IPlaceApiRes> =>
  fetch(`${PLACE_BASE_URL}/api/places/inference/`, {
    method: 'POST',
    body: formData,
  }).then((res) => res.json())
