import { useState } from 'react'
import Header from '@/components/Header'
import Pokemon from '@/components/views/Pokemon'
import { useFetchStartersQuery } from '@/hooks/useFetchStarters'

// simple app to show the generation 1-4 starters for pokemon
function App() {
  const [selectedStarters, setSelectedStarters] = useState<string>('gen1')
  const { data, isLoading, error } = useFetchStartersQuery(selectedStarters)

  // handle the switching of data/ fetching/caching of data
  const handleOnClick = (generation: string) => {
    setSelectedStarters(generation)
  }

  if (isLoading) return <div>loading...</div>
  if (error) return <div>there was an error</div>

  console.log(data)

  return (
    <>
      <Header handleOnClick={handleOnClick} />
      <main className="flex min-h-screen w-full">
        <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data?.map((item) => <Pokemon key={item.name} data={item} />)}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
