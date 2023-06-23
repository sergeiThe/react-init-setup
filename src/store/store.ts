import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { dataApiSlice } from '../api/dataApi'

const rootReducer = combineReducers({
  [dataApiSlice.reducerPath]: dataApiSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
