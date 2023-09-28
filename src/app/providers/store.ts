import { configureStore } from '@reduxjs/toolkit'

import { archiveReducer } from '@/pages/archive'
import { requestsReducer } from '@/pages/requests'

export const store = configureStore({
  reducer: {
    archive: archiveReducer,
    requests: requestsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
