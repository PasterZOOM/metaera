import type { RequestType } from '../types/requestType'

export const requestsMapper = (record: RequestType): { id: string; row: string[] } => {
  return {
    id: record.request_guid,
    row: [record.request_date, record.request_comment, record.request_processed ? '✔' : '✖'],
  }
}
