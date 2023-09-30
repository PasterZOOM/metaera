import type { FC } from 'react'

import { Box, Divider, Flex, Text } from '@mantine/core'

import { File } from '@/entities/file'
import { recordStatusDictionary } from '@/entities/recordStatus'

import { fileTitleCount } from '@/shared/lib/helpers'
import { DownloadFilesButton } from '@/shared/ui/downloadFilesButton'

import type { RecordType } from '../module/types/recordType'

export const DetailModalBody: FC<RecordType> = props => {
  if (!props) return null

  const { files, record_comment, record_date, record_status } = props

  return (
    <Box>
      <Flex align="center" justify="space-between" mb="2rem">
        <Flex gap="md">
          <div>{recordStatusDictionary[record_status]}</div>
          <div>{record_date}</div>
        </Flex>
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
          <File data={file.file_presentation} name={file.file_name} />
        ))}
      </Flex>

      <Box opacity={0.5}>Примечание</Box>
      <Box>{record_comment}</Box>
    </Box>
  )
}
