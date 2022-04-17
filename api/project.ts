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

interface ProjectRegiserRequest {
  title: string
  place: string
  start_date: Date
  end_date: Date
  memo?: string
}

export const getProjectList = (): Promise<AxiosResponse<Project[]>> => {
  return request.get('/project/list')
}

export const registerProject = (data: ProjectRegiserRequest) => {
  return request.post('/project/register', data)
}
