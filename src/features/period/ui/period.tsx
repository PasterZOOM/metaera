import type { FC } from 'react'
import { useState } from 'react'

import { DataPicker } from '@/shared/ui/dataPicker'
import { FilterWrapper } from '@/shared/ui/filterWrapper'

export const Period: FC = () => {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <FilterWrapper title="Период">
      <DataPicker label="c" value={value} onChange={setValue} />
      <DataPicker label="по" value={value} onChange={setValue} />
    </FilterWrapper>
  )
}
