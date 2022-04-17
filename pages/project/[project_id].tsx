import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  getProject,
  ProjectUpdateRequest,
  updateProject,
} from '../../api/project'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ActionButton from '../../components/ActionButton'

const Update: NextPage = () => {
  const router = useRouter()
  const { project_id } = router.query
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [place, setPlace] = useState<string>('')
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [memo, setMemo] = useState<string>('')

  const titleInputRef = useRef()
  const placeInputRef = useRef()
  const startDateInputRef = useRef()
  const endDateInputRef = useRef()
  const memoInputRef = useRef()

  const fetchProject = async (id: number) => {
    const res = await getProject(id).catch((e) => console.error(e.message))
    setTitle(res.data.title)
    titleInputRef.current.value = res.data.title
    setPlace(res.data.place)
    placeInputRef.current.value = res.data.place
    setStartDate(new Date(res.data.start_date))
    startDateInputRef.current.value = res.data.start_date
    setEndDate(new Date(res.data.end_date))
    endDateInputRef.current.value = res.data.end_date
    setMemo(res.data.memo)
    memoInputRef.current.value = res.data.memo
  }

  useEffect(() => {
    return setId(Number(project_id))
  }, [router])

  useEffect(() => {
    if (id) {
      fetchProject(id)
    }
  }, [id])

  const handleUpdate = () => {
    const request: ProjectUpdateRequest = {
      id,
      title,
      place,
      start_date: startDate,
      end_date: endDate,
      memo,
    }
    updateProject(request)
      .catch((e) => {
        console.error(e.message)
      })
      .finally(() => router.push('/project'))
  }

  const handleDelete = () => {
    const res = confirm('Are you sure to delete?')
    if (res) {
      alert('ケチちゃいます')
    } else {
      alert('消すのをやめます')
    }
  }

  return (
    <>
      <form className="mb-4 rounded bg-white px-8 pt-6 pb-8">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="title"
            type="text"
            ref={titleInputRef}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="place"
          >
            Place
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="place"
            type="text"
            ref={placeInputRef}
            placeholder="Place"
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="StartDate"
          >
            StartDate
          </label>
          <div className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none">
            <DatePicker
              className="w-full focus:outline-none"
              selected={startDate}
              dateFormat="yyyy/MM/dd"
              ref={startDateInputRef}
              onChange={(date: Date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="EndDate"
          >
            EndDate
          </label>
          <div className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none">
            <DatePicker
              className="w-full focus:outline-none"
              selected={endDate}
              ref={endDateInputRef}
              dateFormat="yyyy/MM/dd"
              onChange={(date: Date) => setEndDate(date)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="Memo"
          >
            Memo
          </label>
          <textarea
            id="Memo"
            className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
            rows={4}
            ref={memoInputRef}
            onChange={(e) => setMemo(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center">
          <ActionButton
            color={'bg-blue-500'}
            hoverColor={'hover:bg-blue-700'}
            handleClick={handleUpdate}
            buttonText={'更新'}
          />
          <Link href="/project">
            <a className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800">
              キャンセル
            </a>
          </Link>
        </div>
      </form>
    </>
  )
}

export default Update
