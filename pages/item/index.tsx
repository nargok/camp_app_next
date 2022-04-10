import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import FloatingButton from '../../components/FloatingButton'

interface Item {
  id: number
  name: string
  category: string
  weight: number
}

const itemList: Item[] = [
  {
    id: 1,
    name: 'ピコグリル298',
    category: '焚き火台',
    weight: 300,
  },
  {
    id: 2,
    name: 'アイアンメスティン',
    category: 'クッカー',
    weight: 1500,
  },
  {
    id: 3,
    name: 'YOKA 焚き火台',
    category: '焚き火台',
    weight: 1500,
  },
  {
    id: 3,
    name: 'YOKA 焚き火台',
    category: '焚き火台',
    weight: 1500,
  },
  {
    id: 3,
    name: 'YOKA 焚き火台',
    category: '焚き火台',
    weight: 1500,
  },
  {
    id: 3,
    name: 'YOKA 焚き火台',
    category: '焚き火台',
    weight: 1500,
  },
]

const Index: NextPage = () => {
  const router = useRouter()

  const goToRegister = () => {
    router.push('/item/register')
  }

  return (
    <>
      <div className="h-full px-4">
        <div className="mt-2">
          <button
            onClick={() => goToRegister()}
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            登録
          </button>
        </div>
        <table className="w-full table-auto pt-8">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Weight</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item) => (
              <tr>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2 text-right">{item.weight}</td>
                <td className="border px-4 py-2 text-right">
                  <a
                    href="#"
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
    </>
  )
}

export default Index
