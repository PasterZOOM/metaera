import type { ChangeEvent, FC } from 'react'
import { useEffect, useState } from 'react'

import { Box, Button, Divider, Flex, Input, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { File } from '@/entities/file'
import { RECORD_STATUS, recordStatusDictionary } from '@/entities/recordStatus'

import { fileTitleCount } from '@/shared/lib/helpers'
import { DownloadFilesButton } from '@/shared/ui/downloadFilesButton'
import { AppDropzone } from '@/shared/ui/dropzone'

import { useUpdateRequestMutation } from '../module/api/requestsAPI'

import type { RequestType } from '../module/types/requestType'
import type { FileWithPath } from '@mantine/dropzone'

export const DetailModalBody: FC<RequestType> = props => {
  const [editMode, { close: off, open: on }] = useDisclosure(false)
  const [editedData, setEditedData] = useState(props)

  const [update] = useUpdateRequestMutation()

  useEffect(() => {
    setEditedData(props)
  }, [props])

  if (!props) return null
  const { files, request_comment, request_date, request_processed } = props

  const cancel = (): void => {
    setEditedData(props)
    off()
  }
  const save = (): void => {
    update(editedData)
    off()
  }

  const removeFile = (data: string): void => {
    setEditedData(prev => ({ ...prev, files: prev.files.filter(file => file.file_data !== data) }))
  }
  const onDropHandler = (dropFiles: FileWithPath[]): void => {
    dropFiles.forEach(file => {
      const reader = new FileReader()

      reader.onloadend = () => {
        const base64String = reader.result
        setEditedData(prev => ({
          ...prev,
          files: [...prev.files, { file_data: base64String as string, file_name: file.name }],
        }))
      }

      reader.readAsDataURL(file)
    })
  }

  const changeCommentHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditedData(prev => ({ ...prev, request_comment: e.target.value }))
  }

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
        {editMode ? (
          <Flex gap="md">
            <Button color="orange" variant="outline" onClick={cancel}>
              Отмена
            </Button>
            <Button color="orange" onClick={save}>
              Сохранить
            </Button>
          </Flex>
        ) : (
          request_processed && (
            <Button color="orange" variant="outline" onClick={on}>
              Редактировать
            </Button>
          )
        )}
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
        {editMode
          ? editedData.files.map(file => (
              <File
                key={file.file_data}
                data={file.file_data}
                editMode={editMode}
                name={file.file_name}
                remove={removeFile}
              />
            ))
          : files.map(file => (
              <File
                key={file.file_data}
                data={file.file_data}
                editMode={editMode}
                name={file.file_name}
              />
            ))}
      </Flex>

      {editMode && <AppDropzone onDrop={onDropHandler} />}

      <Box opacity={0.5}>Примечание</Box>
      {editMode ? (
        <Input value={editedData.request_comment} onChange={changeCommentHandler} />
      ) : (
        <Box>{request_comment}</Box>
      )}
    </Box>
  )
}
