import { ApiResponse } from 'apisauce'

export interface CatObject {
  breeds: string[]
  id: string
  url: string
  width: number
  height: number
}

export type CatApiResponse = ApiResponse<CatObject[]>
