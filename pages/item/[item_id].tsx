import { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getItem, ItemUpdateRequest, updateItem } from '../../api/item'

const Update: NextPage = () => {
  const router = useRouter()
  const { item_id } = router.query
  const [id, setId] = useState<number>()
  const [name, setName] = useState<string>('')
  const [weight, setWeight] = useState<number>(0)

  const nameInputRef = useRef()
  const weightInputRef = useRef()

  const fetchItem = async (id: number) => {
    const res = await getItem(id).catch((e) => console.error(e.message))
    setName(res.data.name)
    nameInputRef.current.value = res.data.name
    setWeight(res.data.weight)
    weightInputRef.current.value = res.data.weight
  }

  useEffect(() => {
    return setId(item_id)
  }, [router])

  useEffect(() => {
    if (id) {
      fetchItem(id)
    }
  }, [id])

  const handleUpdate = () => {
    const request: ItemUpdateRequest = {
      id,
      name,
      weight,
    }
    updateItem(request)
      .catch((e) => {
        console.error(e.message)
      })
      .finally(() => router.push('/item'))
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
            ref={nameInputRef}
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
        <div className="flex items-center">
          <button
            className="focus:shadow-outline mr-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
            onClick={() => handleUpdate()}
          >
            更新
          </button>
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

export default Update
