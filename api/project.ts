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

interface ProjectList {
  project_list: Project[]
}
interface ProjectRegiserRequest {
  title: string
  place: string
  start_date: Date
  end_date: Date
  memo?: string
}

export interface ProjectUpdateRequest {
  id: number
  title: string
  place: string
  start_date: Date
  end_date: Date
  memo?: string
}

export const getProjectList = (): Promise<AxiosResponse<ProjectList>> => {
  return request.get('/project/list')
}

export const getProject = (id: number): Promise<Project> => {
  return request.get(`/project/${id}`)
}

export const registerProject = (data: ProjectRegiserRequest) => {
  return request.post('/project/register', data)
}

export const updateProject = (data: ProjectUpdateRequest) => {
  return request.put('/project/update', data)
}
