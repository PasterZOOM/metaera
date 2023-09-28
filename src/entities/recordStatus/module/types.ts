import type { RECORD_STATUS } from './consts'

export type ProcessingStatus = Partial<Record<RECORD_STATUS, boolean>>
