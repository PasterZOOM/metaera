import { configureStore } from '@reduxjs/toolkit'

import { archiveAPI, archiveReducer } from '@/pages/archive'
import { requestsApi, requestsReducer } from '@/pages/requests'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(requestsApi.middleware).concat(archiveAPI.middleware),
  reducer: {
    archive: archiveReducer,
    requests: requestsReducer,
    [requestsApi.reducerPath]: requestsApi.reducer,
    [archiveAPI.reducerPath]: archiveAPI.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
