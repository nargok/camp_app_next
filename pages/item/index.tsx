import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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
]

const Index: NextPage = () => {
  return (
    <div className="px-4">
      <table className="w-full table-auto">
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

    // <div className="flex w-full justify-center py-2">
    //   <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    //     <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
    //       <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
    //         <tr>
    //           <th scope="col" className="px-6 py-3">
    //             Product name
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             category
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Weight
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             <span className="sr-only">Edit</span>
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {itemList.map((item) => (
    //           <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700">
    //             <th
    //               scope="row"
    //               className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
    //             >
    //               {item.name}
    //             </th>
    //             <td className="px-6 py-4">{item.category}</td>
    //             <td className="px-6 py-4">{item.weight}</td>
    //             <td className="px-6 py-4 text-right">
    //               <a
    //                 href="#"
    //                 className="font-medium text-blue-600 hover:underline dark:text-blue-500"
    //               >
    //                 Edit
    //               </a>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  )
}

export default Index
