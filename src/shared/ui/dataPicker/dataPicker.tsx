import { forwardRef } from 'react'

import { DatePickerInput } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons-react'

import type { DatePickerInputProps } from '@mantine/dates'

const icon = <IconCalendar stroke={1.5} style={{ height: '1.25rem', width: '1.25rem' }} />

export const DataPicker = forwardRef<HTMLButtonElement, DatePickerInputProps>((props, ref) => {
  return (
    <DatePickerInput
      {...props}
      ref={ref}
      clearable
      leftSection={icon}
      leftSectionPointerEvents="none"
      valueFormat="DD.MM.YYYY"
      styles={{
        input: { minWidth: '9.5rem' },
        root: { alignItems: 'center', display: 'flex', gap: '0.625rem' },
      }}
    />
  )
})
