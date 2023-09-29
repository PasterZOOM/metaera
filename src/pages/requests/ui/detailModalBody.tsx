import type { FC } from 'react'

import { Box, Button, Divider, Flex, Text } from '@mantine/core'

import { File } from '@/entities/file'
import { RECORD_STATUS, recordStatusDictionary } from '@/entities/recordStatus'

import { fileTitleCount } from '@/shared/lib/helpers'
import { DownloadFilesButton } from '@/shared/ui/downloadFilesButton'

import type { RequestType } from '../module/types/requestType'

export const DetailModalBody: FC<RequestType> = props => {
  if (!props) return null

  const { files, request_comment, request_date, request_processed } = props

  return (
    <Box>
      <Flex align="center" justify="space-between" mb="2rem">
        <Flex gap="md">
          <div>
            {request_processed
              ? recordStatusDictionary[RECORD_STATUS.IN_PROCESS]
              : recordStatusDictionary[RECORD_STATUS.REJECTED]}
          </div>
          <div>{request_date}</div>
        </Flex>
        <Button color="orange" variant="outline">
          Редактировать
        </Button>
      </Flex>
      <Flex gap="md" mb="2rem">
        <Flex gap="md">
          <Text style={{ whiteSpace: 'nowrap' }}>
            {files.length} {fileTitleCount(files.length)}
          </Text>
          <DownloadFilesButton files={files.map(file => file.file_name)} />
        </Flex>
        <Divider my="sm" w="100%" />
      </Flex>
      <Flex gap="md" mb="2rem">
        {files.map(file => (
          <File href={file.file_name} />
        ))}
      </Flex>

      <Box opacity={0.5}>Примечание</Box>
      <Box>{request_comment}</Box>
    </Box>
  )
}
