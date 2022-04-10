import { AxiosError, AxiosResponse } from 'axios'
import request from './request'

class Item {
  constructor(private name: string, private weight: number) {}
}

interface ItemRegisterRequest {
  name: string
  weight: number
}

export interface ItemUpdateRequest {
  id: number
  name: string
  weight: number
}

export const getItemList = (): Promise<AxiosResponse<Item[]>> => {
  return request.get('/item/list')
}

export const getItem = (itemId: number): Promise<AxiosResponse<Item>> => {
  return request.get(`/item/${itemId}`)
}

export const registerItem = (data: ItemRegisterRequest) => {
  return request.post('/item/register', data)
}

export const updateItem = (data: ItemUpdateRequest) => {
  return request.put('/item/update', data)
}
