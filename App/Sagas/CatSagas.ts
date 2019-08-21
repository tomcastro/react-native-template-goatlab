import { call, put } from 'redux-saga/effects'

import CatActions from 'appSrc/Redux/CatRedux'
import API from 'appSrc/Services/CatApi'
import { CatApiResponse } from 'appSrc/Types/CatApiResponse'

const api = API.create()

export function* getCatAvatar(action) {
  const response: CatApiResponse = yield call(api.getCat)
  if (response.ok) {
    const { data } = response
    const firstCat = data![0]
    const avatar = firstCat.url
    // do data conversion here if needed
    yield put(CatActions.catSuccess(avatar))
  } else {
    yield put(CatActions.catFailure())
  }
}
