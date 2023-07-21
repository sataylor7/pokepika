import { expect, afterEach } from 'vitest'
import { setupServer } from 'msw/node'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { handlers } from '@/mocks/handlers'

export const server = setupServer(...handlers)

expect.extend(matchers)

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
// Clean up after the tests are finished.
afterAll(() => server.close())
