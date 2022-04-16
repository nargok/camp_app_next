import { NextPage } from 'next'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { registerItem } from '../../api/item'
import ActionButton from '../../components/ActionButton'

const Register: NextPage = () => {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const [weight, setWeight] = useState<number>(0)
  const weightInputRef = useRef()

  const handleRegister = () => {
    const form = {
      name,
      weight,
    }
    registerItem(form)
      .catch((e) => console.error(e.message))
      .finally(() => {
        router.push('/item')
      })
  }

  const handleAddWeight = (aWeight: number) => {
    const newWeight = weight + aWeight
    // console.log(newWeight)
    setWeight(newWeight)
    weightInputRef.current.value = newWeight
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
            htmlFor="username"
          >
            Name
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="name"
            type="text"
            placeholder="Item Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Category
          </label>
          <select className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
            <option>ナイフ</option>
            <option>焚き火台</option>
            <option>テント</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="weight"
          >
            Weight(g)
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="weight"
            type="number"
            ref={weightInputRef}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <button
            onClick={() => handleAddWeight(100)}
            className="mr-4 w-40 rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          >
            +100g
          </button>
          <button
            onClick={() => handleAddWeight(500)}
            className="mr-4 w-40 rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          >
            +500g
          </button>
          <button
            onClick={() => handleAddWeight(1000)}
            className="w-40 rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
          >
            +1kg
          </button>
        </div>
        <div className="flex items-center">
          <ActionButton
            color={'bg-blue-500'}
            hoverColor={'hover:bg-blue-700'}
            handleClick={handleRegister}
            buttonText={'登録'}
          />
          <Link href="/item">
            <a className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800">
              キャンセル
            </a>
          </Link>
        </div>
      </form>
      <p className="text-center text-xs text-gray-500">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </>
  )
}

export default Register
