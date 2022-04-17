import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getProjectList } from '../../api/project'

interface Project {
  id: number
  title: string
  place: string
  startDate: Date
  endDate: Date
}

const Index: NextPage = () => {
  const [projectList, setProjectList] = useState<Project[]>([])

  useEffect(() => {
    getProjectList()
      .then((res) => {
        setProjectList(res.data.project_list)
      })
      .catch((e) => console.error(e.message))
  }, [])

  return (
    <div className="px-4">
      <table className="w-full table-auto pt-8">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Place</th>
            <th className="px-4 py-2">StartDate</th>
            <th className="px-4 py-2">EndDate</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((project) => (
            <tr key={project.id}>
              <td className="border px-4 py-2">{project.title}</td>
              <td className="border px-4 py-2">{project.place}</td>
              <td className="border px-4 py-2 text-right">
                {project.startDate}
              </td>
              <td className="border px-4 py-2 text-right">{project.endDate}</td>
              <td className="border px-4 py-2 text-right">
                <a
                  href={`item/${project.id}`}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Index
