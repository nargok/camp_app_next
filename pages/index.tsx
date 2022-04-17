import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import 'flowbite'

function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-5 text-4xl font-bold">Home</h1>
      <span className="text-7xl">🏡</span>
    </div>
  )
}

export default Home
