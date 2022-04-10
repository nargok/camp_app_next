import { NextPage } from 'next'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { registerItem } from '../../api/item'

const Register: NextPage = () => {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const [weight, setWeight] = useState<number>(0)

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

  return (
    <>
      <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 ">
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
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center">
          <button
            className="focus:shadow-outline mr-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={() => handleRegister()}
          >
            Register
          </button>
          <Link href="/item">
            <a className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800">
              Cancel
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
