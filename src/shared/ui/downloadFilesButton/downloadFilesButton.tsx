import type { FC } from 'react'

import { IconDownload } from '@tabler/icons-react'

type Props = {
  files: string[]
}

export const DownloadFilesButton: FC<Props> = props => {
  const { files } = props

  const handleDownload = (): void => {
    files.forEach(file => {
      const link = document.createElement('a')
      link.href = file
      link.download = ''
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }

  return <IconDownload cursor="pointer" onClick={handleDownload} />
}
