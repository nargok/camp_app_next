import { AxiosResponse } from 'axios'
import request from './request'

class Project {
  constructor(
    private id: number,
    private title: string,
    private place: string,
    private startDate: Date,
    private endDate: Date,
    private memo: string
  ) {}
}

export const getProjectList = (): Promise<AxiosResponse<Project[]>> => {
  return request.get('/project/list')
}
