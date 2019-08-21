import apisauce from 'apisauce'
import { CatObject } from 'appSrc/Types/CatApiResponse'

const create = (baseURL = 'https://api.thecatapi.com/v1/images') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  const getCat = () => api.get<CatObject[]>('search?mime_types=jpg')

  return {
    getCat
  }
}

export default {
  create
}
