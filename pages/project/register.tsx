import { NextPage } from 'next'
import Link from 'next/link'
// import 'tw-elements'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { useRouter } from 'next/router'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { registerItem } from '../../api/item'
import ActionButton from '../../components/ActionButton'

const Register: NextPage = () => {
  const router = useRouter()
  const [title, setTitle] = useState<string>('')
  const [place, setPlace] = useState<string>('')
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [memo, setMemo] = useState<string>('')

  const handleRegister = () => {
    const form = {
      name,
      place,
    }
    registerItem(form)
      .catch((e) => console.error(e.message))
      .finally(() => {
        router.push('/item')
      })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <form
        className="mb-4 rounded bg-white px-8 pt-6 pb-8"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="title"
          >
            Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="title"
            type="text"
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
            onChange={(e) => setMemo(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center">
          <ActionButton
            color={'bg-blue-500'}
            hoverColor={'hover:bg-blue-700'}
            handleClick={handleRegister}
            buttonText={'登録'}
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

export default Register
