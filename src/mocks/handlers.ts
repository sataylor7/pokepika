import { rest } from 'msw'
import generations from '@/data/starters.json'
/* eslint-disable */
import { gen1 } from './gen1'
import { gen2 } from './gen2'

export const handlers = [
  rest.get('http://pokeapi.co/api/v2/pokemon/:id', (req, res, ctx) => {
    const name = req.params.id as string
    const data = generations.gen1.includes(name) ? gen1 : gen2
    //console.log('data', req.params.id, data)
    return res(ctx.status(200), ctx.json(data))
  }),
]
