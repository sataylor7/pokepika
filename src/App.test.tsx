import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, renderHook, waitFor } from '@testing-library/react'
//import App from './App'
import { useFetchStartersQuery } from '@/hooks/useFetchStarters'

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  })

export function createWrapper() {
  const testQueryClient = createTestQueryClient()
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  }
}

describe('App component', () => {
  it('Displays the loading view', async () => {
    const { result } = renderHook(() => useFetchStartersQuery('gen1'), {
      wrapper: createWrapper(),
    })

    // the status is loading
    await waitFor(() => expect(result.current.status).toEqual('loading'))
    //console.log(result.current.data)
    //expect(result.current.data?.name).toBe('mocked-react-query')
  })

  it('Displays the error message', () => {})

  it('should render 1st gen starter pokemon', () => {})
})
