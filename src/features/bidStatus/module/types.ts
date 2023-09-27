import type { PROCESSING_STATUS } from './consts'

export type ProcessingStatus = Partial<Record<PROCESSING_STATUS, boolean>>
