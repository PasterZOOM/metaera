import type { FC } from 'react'

import { Anchor, BackgroundImage, Box, Flex, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconDownload, IconEye } from '@tabler/icons-react'

import { definePictogram } from '../module/lib/definePictogram'

type Props = {
  href: string
}

export const File: FC<Props> = props => {
  const { href } = props

  const [hovered, { close, open }] = useDisclosure(false)

  const filePath = definePictogram(href)

  return (
    <Box style={{ position: 'relative' }} w="fit-content" onMouseEnter={open} onMouseLeave={close}>
      <Stack
        align="center"
        bg={hovered ? 'blue' : undefined}
        opacity={hovered ? '0.3' : undefined}
        style={{ borderRadius: '0.5rem', padding: '0.5rem' }}
      >
        <BackgroundImage h="8rem" src={filePath} w="7rem" />
        {(/([^/|\\]+)\.\w+$/.exec(href) ?? [''])[0]}
      </Stack>
      {hovered && (
        <Flex align="center" gap="md" justify="center" style={{ inset: 0, position: 'absolute' }}>
          <Anchor download href={href}>
            <IconDownload size="32" />
          </Anchor>
          <Anchor href={href} rel="noreferrer" target="_blank">
            <IconEye size="32" />
          </Anchor>
        </Flex>
      )}
    </Box>
  )
}
