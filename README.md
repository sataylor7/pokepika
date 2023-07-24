# Notes

The basic scaffolding for this project was taken from my[personal vite setup template](https://github.com/sataylor7/my-vite-starter-template)
React + TS + Axios + React-query + Vite + ESlint + Prettier + Vitest + Tailwind

# Overview

The idea for this project was to fetch the starter pokemon for gen 1-4. Display cards with their types in corresponding colors, and a more information button that when clicked animates down and shows more stats.

## Architecture

- src/ => main folder that holds all the files for the site
- assets/ => this folder isn't actually used in this project, in other projects it holds svgs
- components/ => this is the folder that holds all the components for the project

  1.  providers => holds all the context providers for the site, in this case just the query one, I do have plans to add one for toast like messages
  2.  views => the idea behind this folder is that it would house the components for different views, I do have plans at some point to add routing to the app. For now just the pokemon component lives there. (the pokemon component does hold two components, the card and then the detail, I chose not to separate them at this time. When I start adding more info to the detail then I will)

- data/ => this holds the starter.json file that has all of the starters in arrays, this makes it easier to config later when I add more
- hooks/ => this holds the hooks for the app, currently only the useFetchStarters is there, as it is a wrapper around react-query
- mocks/ => this holds the setups for tests, currently only gen1/2 are there to test, since they have the same schema from the pokeAPI
- services/ => this holds the files for 3rd party integrations

  1. apiClient.ts => this is a simplified version of something I wrote 5 years ago in JS, but it sets up axios client and request wrapper
  2. PokeService.ts => this is wrapper around the pokeApi, it currently just has one static method called `fetchStarters`. I do plan on adding several more, one for searching, one for listing, and one for evolutions

### Future Plans

I would like to actually set this up to switch between pokemon and digimon. I still have to figure out what the UX would look like to make that coherent

[ ] fix/debug the tests
[ ] add toast context (no 3rd party)
[ ] fix mobile navigation
[ ] add the evolution chain
[ ] add react-router
[ ] add a "full" detail/breakdown view
[ ] add search functionality
[ ] implement a "search" history (this would probably rely on the caching of react-query, so would need to think through that a bit)
