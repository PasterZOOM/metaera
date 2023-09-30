import type { FC } from 'react'

import { Group, rem, Text } from '@mantine/core'
import { Dropzone } from '@mantine/dropzone'
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react'

import type { DropzoneProps, FileWithPath } from '@mantine/dropzone'

export const AppDropzone: FC<
  Partial<DropzoneProps> & { onDrop: (files: FileWithPath[]) => void }
> = props => {
  return (
    <Dropzone
      maxSize={3 * 1024 ** 2}
      accept={[
        'image/jpeg',
        'image/png',
        'image/bmp',
        'image/tiff',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/rtf',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ]}
      {...props}
    >
      <Group gap="xl" justify="center" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            stroke={1.5}
            style={{ color: 'var(--mantine-color-blue-6)', height: rem(52), width: rem(52) }}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            stroke={1.5}
            style={{ color: 'var(--mantine-color-red-6)', height: rem(52), width: rem(52) }}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto
            stroke={1.5}
            style={{ color: 'var(--mantine-color-dimmed)', height: rem(52), width: rem(52) }}
          />
        </Dropzone.Idle>

        <div>
          <Text inline size="xl">
            Перетащите изображения сюда или нажмите, чтобы выбрать файлы
          </Text>
          <Text inline c="dimmed" mt={7} size="sm">
            Прикрепляйте столько файлов, сколько хотите, каждый файл не должен превышать 3 МБ.
          </Text>
        </div>
      </Group>
    </Dropzone>
  )
}
