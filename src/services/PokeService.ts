/* eslint-disable @typescript-eslint/no-explicit-any */
import Client, { request } from './apiClient'
import generations from '@/data/starters.json'

const pokeClient = Client('https://pokeapi.co/api/v2/')

export default class PokeService {
  static async fetchStarters(generation: string) {
    const gen = generations[generation as keyof typeof generations]
    // fetch the starter pokemon in parallel, there is a way to optimize this
    // where you can call X at a time and when those finish then call the rest
    // I dont remember how to do it off the top of my head
    const results = await Promise.all(
      gen.map((value: { name: string }) =>
        request(pokeClient, {
          url: `/pokemon/${value.name}`,
          method: 'GET',
        }),
      ),
    )
    return results
  }
}
