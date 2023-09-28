import type { RequestType } from '../types/requestType.ts'
import type { RootState } from '@/app'

export const getRequests = (state: RootState): RequestType[] => state.requests.items
