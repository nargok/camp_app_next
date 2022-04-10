import { AxiosError, AxiosResponse } from 'axios'
import request from './request'

class Item {
  constructor(private name: string, private weight: number) {}
}

interface ItemRegisterRequest {
  name: string
  weight: number
}

export const getItemList = (): Promise<AxiosResponse<Item[]>> => {
  return request.get('/item/list')
}

export const registerItem = (data: ItemRegisterRequest) => {
  return request.post('/item/register', data)
}
