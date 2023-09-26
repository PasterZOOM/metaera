import { useState } from 'react'
import type { FC } from 'react'

import { Select } from '@mantine/core'

import { FilterWrapper } from '@/shared/ui/filterWrapper'

enum DocType {
  IN = 'IN',
  OUT = 'OUT',
}

const data = [
  { label: 'Входящий', value: DocType.IN },
  { label: 'Исходящий', value: DocType.OUT },
]

export const DocumentType: FC = () => {
  const [value, setValue] = useState<DocType | null>(null)

  return (
    <FilterWrapper title="Тип документа">
      <Select data={data} value={value} onChange={newValue => setValue(newValue as DocType)} />
    </FilterWrapper>
  )
}
