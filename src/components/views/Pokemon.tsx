import React, { useState } from 'react'
interface PokemonDetailData {
  id: number
  name: string
  height: number
  weight: number
  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>
  sprites: {
    front_default: string
  }
  abilities: Array<{
    is_hidden: boolean
    slot: number
    ability: {
      name: string
      url: string
    }
  }>
  moves: Array<{
    move: {
      name: string
      url: string
    }
  }>
  species: {
    name: string
    url: string
  }
}

type Props = {
  data: PokemonDetailData
}

const PokemonDetail = ({
  pokemon,
  showDetail,
}: {
  pokemon: PokemonDetailData
  showDetail: boolean
}) => {
  // moves array can be a lot, so for now I am just displaying the first 10
  // ideally we could have it if they clicked show more then it would show the next 10 etc
  // I am running out of my time limit of a few hours though
  const trimmedMoveArray =
    pokemon.moves.length > 9 ? pokemon.moves.slice(0, 9) : pokemon.moves
  return (
    <div
      className={
        (showDetail ? 'h-fit opacity-100' : 'h-0 opacity-0') +
        ' transition-all ease duration-500 mt-4'
      }
    >
      <div className="rounded-lg border bg-slate-50 px-5 py-4 mb-4">
        <div className="flex flex-row gap-x-4 text-slate-700">
          <span className="text-md font-semibold">Abilities:</span>
          {pokemon.abilities.length > 0 &&
            pokemon.abilities.map(({ ability, is_hidden }) => {
              if (!is_hidden) {
                return <div key={ability.name}>{ability.name}</div>
              } else {
                return null
              }
            })}
        </div>
        <div className="flex flex-row gap-x-4 text-slate-700">
          <span className="text-md font-semibold">Moves:</span>
          <div className="flex flex-wrap gap-x-4">
            {trimmedMoveArray.length > 0 &&
              trimmedMoveArray.map(({ move }) => {
                return <div key={move.name}>{move.name}</div>
              })}
          </div>
        </div>
        <div className="flex flex-row gap-x-4 text-slate-700">
          <span className="text-md font-semibold">Species:</span>
          {pokemon.species && <div>{pokemon.species.name}</div>}
        </div>
      </div>
    </div>
  )
}

function Pokemon({ data }: Props) {
  const [showDetail, setShowDetail] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('hello there')
    setShowDetail(!showDetail)
  }

  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat text-center"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          className="rounded-t-lg"
          src={data.sprites.front_default}
          alt={data.name}
        />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
          {data.name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 ">
          types:{' '}
          {data.types.map((item: { type: { name: string } }) => {
            return (
              <span
                className={`rounded-sm ${item.type.name} text-center py-1 px-2`}
                key={item.type.name}
              >
                {item.type.name}
              </span>
            )
          })}
        </p>

        <button
          type="button"
          className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] hover:cursor-pointer "
          onClick={handleClick}
        >
          More Information
        </button>

        <PokemonDetail pokemon={data} showDetail={showDetail} />
      </div>
    </div>
  )
}

export default Pokemon
