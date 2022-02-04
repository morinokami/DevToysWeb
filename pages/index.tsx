import type { NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'next-themes'
import SidebarLayout from '../layouts/SidebarLayout'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <Head>
        <title>DevToysWeb</title>
      </Head>
      <SidebarLayout>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          toggle
        </button>
      </SidebarLayout>
    </div>
  )
}

export default Home