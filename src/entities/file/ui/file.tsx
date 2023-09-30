import type { FC } from 'react'

import { Anchor, BackgroundImage, Box, Flex, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconCross, IconDownload, IconEye } from '@tabler/icons-react'

import { definePictogram } from '../module/lib/definePictogram'

type Props = {
  data: string
  editMode?: boolean
  name: string
  remove?: (data: string) => void
}

export const File: FC<Props> = props => {
  const { data, editMode, name, remove } = props

  const [hovered, { close, open }] = useDisclosure(false)

  const src = data.includes('data:image/jpeg;base64') ? data : definePictogram(name)

  const removeHandler = (): void => {
    remove?.(data)
  }

  return (
    <Box style={{ position: 'relative' }} w="fit-content" onMouseEnter={open} onMouseLeave={close}>
      <Stack
        align="center"
        bg={hovered && !editMode ? 'blue' : undefined}
        opacity={hovered && !editMode ? '0.3' : undefined}
        style={{ borderRadius: '0.5rem', padding: '0.5rem' }}
      >
        <BackgroundImage h="8rem" src={src} w="7rem" />
        {(/([^/|\\]+)\.\w+$/.exec(name) ?? [''])[0]}
      </Stack>
      {editMode && (
        <IconCross style={{ position: 'absolute', right: 0, top: 0 }} onClick={removeHandler} />
      )}
      {hovered && !editMode && (
        <Flex align="center" gap="md" justify="center" style={{ inset: 0, position: 'absolute' }}>
          <Anchor download href={name}>
            <IconDownload size="32" />
          </Anchor>
          <Anchor href={name} rel="noreferrer" target="_blank">
            <IconEye size="32" />
          </Anchor>
        </Flex>
      )}
    </Box>
  )
}
