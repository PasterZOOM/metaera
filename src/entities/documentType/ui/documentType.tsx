import type { FC } from 'react'

import { Select } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

import { DOCUMENT_TYPE } from '../module/consts'

const data = [
  { label: 'Входящий', value: DOCUMENT_TYPE.IN },
  { label: 'Исходящий', value: DOCUMENT_TYPE.OUT },
]

type Props = {
  changeDocumentType: (documentType: DOCUMENT_TYPE | null) => void
  documentType: DOCUMENT_TYPE | null
}

export const DocumentType: FC<Props> = props => {
  const { changeDocumentType, documentType } = props

  return (
    <FilterWrapper title="Тип документа">
      <Select
        data={data}
        value={documentType}
        onChange={newValue => changeDocumentType(newValue as DOCUMENT_TYPE)}
      />
    </FilterWrapper>
  )
}
