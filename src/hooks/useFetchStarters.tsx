import PokeService from '@/services/PokeService'
import { useQuery } from '@tanstack/react-query'

export const useFetchStartersQuery = (selectedStarters: string) => {
  return useQuery({
    queryKey: ['starters', selectedStarters],
    queryFn: () => PokeService.fetchStarters(selectedStarters),
    enabled: Boolean(selectedStarters),
  })
}
