import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter, Routes } from 'react-router-dom'
import { store } from '../store/store'

interface Props {
  children: React.ReactNode
}

const TestWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/', '/admin']}>
        {/* <BrowserRouter> */}
        <Routes>{children}</Routes>
        {/* </BrowserRouter> */}
      </MemoryRouter>
    </Provider>
  )
}

export default TestWrapper

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: TestWrapper, ...options })

export * from '@testing-library/react'
export { customRender as render }
