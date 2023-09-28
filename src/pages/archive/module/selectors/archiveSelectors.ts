import type { RecordType } from '../types/recordType'
import type { RootState } from '@/app'

export const getArchive = (state: RootState): RecordType[] => state.archive.items
