type RequestFileType = {
  file_data: string
  file_name: string
}
export type RequestType = {
  files: RequestFileType[]

  request_comment: string
  request_date: string
  request_guid: string
  request_processed: boolean
}
