import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { server } from '../mocks/server'
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterEach(() => {
  cleanup()
})

afterAll(() => server.close())
afterEach(() => server.resetHandlers())
