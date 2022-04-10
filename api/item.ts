import { AxiosError, AxiosResponse } from 'axios'
import request from './request'

class Item {
  constructor(private name: string, private weight: number) {}
}

export const getItemList = (): Promise<AxiosResponse<Item[]>> => {
  return request.get('/item/list')
}
